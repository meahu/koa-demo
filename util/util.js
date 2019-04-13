
// 解析上下文里node原生请求的POST参数
const parsePostData = (ctx) => {
    return new Promise((resolve, reject) => {
        try {
            var a = 0 / 0;
            let postdata = "";
            ctx.req.addListener('data', (data) => {
                postdata += data
            })
            ctx.req.addListener("end", function () {
                let parseData = parseQueryStr(postdata)
                resolve(parseData)
            })
        } catch (err) {
            reject(err)
        }
    })
}

// 将POST请求参数字符串解析成JSON
const parseQueryStr = (queryStr) => {
    let queryData = {}
    let queryStrList = queryStr.split('&')

    for (let [index, queryStr] of queryStrList.entries()) {
        let itemList = queryStr.split('=')
        queryData[itemList[0]] = decodeURIComponent(itemList[1])
    }
    return queryData
}

const resData = (data, errCode = 0, errMsg = '成功') => {
    return {
        errCode,
        errMsg,
        data
    }
}

module.exports = {
    parsePostData,
    parseQueryStr,
    resData
}