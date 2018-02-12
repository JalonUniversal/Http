# Http
Simple Http Library In Front End

# Usage
## GET
    http({
        url: '/api/getAllPeopleList',
        method: 'GET',
        data: {
            type: 'all',
            level: 'high'
        },
        success: function(data) {
            console.log(data)
        },
        failed: function(err) {
            console.log(err)
        }
    });
## POST
    http({
        url: '/api/getAllPeopleList',
        method: 'POST',        // Yeah, The different is to change the method type
        data: {
            type: 'all',
            level: 'high'
        },
        success: function(data) {
            console.log(data)
        },
        failed: function(err) {
            console.log(err)
        }
    });

> WHat I do, is I do
[https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518441009542&di=aa9951bdf6d951d685725c838c97c31e&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1609130396%2C2606293275%26fm%3D214%26gp%3D0.jpg]
[https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2554481180,3609151767&fm=27&gp=0.jpg]
