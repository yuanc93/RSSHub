const got = require('@/utils/got');
const cheerio = require('cheerio');

module.exports = async (ctx) => {
    const uid = ctx.params.uid;
    const url = `https://guba.eastmoney.com/pc/mycenter/index?uid=${uid}`;

    const response = await got(url);
    const $ = cheerio.load(response.data);

    const list = $('div.user-post-item')
        .slice(0, 10)
        .map((i, el) => {
            const title = $(el).find('a.title').text().trim();
            const link = 'https://guba.eastmoney.com' + $(el).find('a.title').attr('href');
            const dateText = $(el).find('span.time').text().trim();
            const pubDate = new Date(dateText).toUTCString();

            return { title, link, pubDate };
        })
        .get();

    ctx.state.data = {
        title: `东方财富股吧用户 ${uid} 的发言`,
        link: url,
        item: list,
    };
};
