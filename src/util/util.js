export const getWindowHeight = () => {
    let height = 0;
    uni.getSystemInfo({
        success(res) {
            height = res.screenHeight - (res.platform === "ios" ? 44 : 48) - res.statusBarHeight;
        },
    });
    return height;
};