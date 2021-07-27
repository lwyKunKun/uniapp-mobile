const loadingTime = 500;
const showLog = true;
/* 这个js仅用于在demo中模拟网络请求，请勿导入或修改此文件 */
function queryList(pageNo, pageSize, list, callback) {
    pageNo = parseInt(pageNo);
    pageSize = parseInt(pageSize);
    if (pageNo < 0 || pageSize <= 0) {
        callQueryResult(callback, []);
        return;
    }
    if (showLog) {
        console.info(`请求参数：【pageNo:${pageNo},pageSize:${pageSize}】`);
    }
    uni.showLoading({
        title: "加载中...",
    });
    if (pageNo == 0) {
        pageNo = 1;
    }
    var totalPagingList = deepClone(list);
    let pageNoIndex = (pageNo - 1) * pageSize;
    if (pageNoIndex + pageSize <= totalPagingList.length) {
        callQueryResult(callback, totalPagingList.splice(pageNoIndex, pageSize));
    } else if (pageNoIndex < totalPagingList.length) {
        callQueryResult(callback, totalPagingList.splice(pageNoIndex, totalPagingList.length - pageNoIndex));
    } else {
        callQueryResult(callback, []);
    }
}

function callQueryResult(callback, arg) {
    setTimeout(() => {
        uni.hideLoading();
        if (showLog) {
            console.log("%c\n----------响应开始--------", "color:#0113fa;");
            // #ifdef H5
            console.table(arg);
            // #endif

            // #ifndef H5
            console.log(arg);
            // #endif
            console.log("%c----------响应结束--------\n", "color:#0113fa;");
        }
        callback(arg);
    }, loadingTime);
}

function deepClone(obj) {
    //深拷贝
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                //判断obj子元素是否为对象，如果是，递归复制
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

module.exports = {
    queryList,
};