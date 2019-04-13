exports.get = async (ctx) => {
    console.log(ctx);
    await ctx.render('../views/signin');
};

function parsePostData( ctx ) {
    return new Promise((resolve, reject) => {
      try {
        let postdata = "";
        ctx.req.addListener('data', (data) => {
          postdata += data
        })
        ctx.req.addListener("end",function(){
          let parseData = parseQueryStr( postdata )
          resolve( parseData )
        })
      } catch ( err ) {
        reject(err)
      }
    })
  }

  // 将POST请求参数字符串解析成JSON
function parseQueryStr( queryStr ) {
    let queryData = {}
    let queryStrList = queryStr.split('&')
    console.log( queryStrList )
    for (  let [ index, queryStr ] of queryStrList.entries()  ) {
      let itemList = queryStr.split('=')
      queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
    }
    return queryData
  }
exports.post = async (ctx, next) => {
    let postData = await parsePostData(ctx);
    console.log(postData);
    ctx.body = 'hello koa2';
    // var data = ctx.request.body;
    // console.log(data);
    // var userInfo = yield $User.getUserByName(data.name);
    // if (!userInfo || (userInfo.password !== data.password)) {
    //     this.flash = {error: '用户名或密码错误!'};
    //     return this.redirect('back');
    // }

    // this.session.user = {
    //     name: userInfo.name,
    //     email: userInfo.email
    // };

    // this.flash = {success: '登录成功!'};
    // this.redirect('/user/' + userInfo.name);
};