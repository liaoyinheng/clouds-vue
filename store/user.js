export const state = () => ({
    userInfo: {
        token: '',
        user: {}
    }
});

export const mutations = {
    // 设置用户的数据的
    setUserInfo(state, data){
        state.userInfo = data;
        // localStorage.setItem("userInfo", JSON.stringify(data));
    },

    // 清楚用户的数据
    clearUserInfo(state){
        // 重置用户信息
        state.userInfo = {
            token: '',
            user: {}
        }        
    }
};

// 存放公共的异步的方法
export const actions = {

    // resolve
    login({ commit }, data){

        return this.$axios({
            url: "/accounts/login",
            method: "post",
            data:data
        }).then(res => {
             // 在当前的模块下调用mutations可以不用模块名字
            // `user/setUserInfo`写成setUserInfo
            commit("setUserInfo", res.data);

            // 调用外部的成功的回调函数
            // 在pormise函数中可以用过Promise.resolve来调用成功的回调函数
            Promise.resolve();

            //Promise.reject();
            //Promise.all()
        })
    }
}