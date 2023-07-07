alerts = $('.alert');
for (let i = 0; i < alerts.length; i++) {
    setTimeout(() => {
        $(alerts[i]).slideUp(750)
    }, 2000)
};