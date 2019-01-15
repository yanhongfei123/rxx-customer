const  setStorageSync = (key, value)=>{
    uni.setStorageSync(key, value);
}

const  getStorageSync = (key) => {
  return  uni.getStorageSync(key);
}

const formatNumber = (n) => {
    n = n.toString();
    return n[1] ? n : '0' + n;
};

const formatDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    return [year, month].map(formatNumber).join('-');
};

const formatTime = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
};

const Toast = {
    warn: function (val) {
        uni.showToast({
            title: val,
            icon: 'warn',
            duration: 2000,
            mask: true
        })
    },
    toast: function (title) {   
				uni.showToast({
						icon: 'none',
						duration: 2000,
						title
				});		
    },
    success: function (val) {
        uni.showToast({
            title: val,
            icon: 'success',
            duration: 2000,
            mask: true
        })
    },
    error: function (val) {
        uni.showToast({
            title: val,
            //  image: 'https://www.ishiyaji.com/static/images/others/icon-error.png',
            duration: 2000,
            mask: true
        })
    },
    showLoading: function (param = 'loading') {
        uni.showLoading({
            title: param,
            mask: true
        })
    },
    hideLoading: function () {
        setTimeout(() => {
            uni.hideLoading()
        }, 100)
    },
    showModal: function (title, content, callback) {
        uni.showModal({
            title,
            content,
            showCancel: true,
            success: function (res) {
                typeof callback === 'function' && callback(res);
            }
        })
    },

};

export default {
    setStorageSync,
    getStorageSync,
    formatDate,
    formatTime,
    Toast
};