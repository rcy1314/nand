#credits goto okabe
#Legacy Multiline https://github.com/acktic/xml-sites-array
#curl -q -s "https://raw.githubusercontent.com/acktic/xml-sites-array/master/head.js" | grep uri | awk '{print $2}' | tr -d ',' | tr -d '"' | grep http | xargs -n1 -P 10 -I {} bash -c 'curl --connect-timeout 10 -q -s -q -k "{}" -I | grep -e rss -e text -e xml -e html -e json >/dev/null && echo "Feed is live: {}" || echo "Feed is dead: {}"' | gawk '{ print strftime("[%Y-%m-%d %H:%M:%S]"), $0 }'

#Minified
curl -q -s "https://acktic.github.io/site/js/main/Assets.js" | grep -oP 'uri:`.*' | sed 's/uri://g' | cut -f1 -d, | tr -d '`' | grep http | xargs -n1 -P 10 -I {} bash -c 'curl --connect-timeout 10 -q -s -q -k "{}" -I | grep -e rss -e text -e xml -e html -e json >/dev/null && echo "Feed is live: {}" || echo "Feed is dead: {}"' | gawk '{ print strftime("[%Y-%m-%d %H:%M:%S]"), $0 }'

#Unused for now => rewrite unique ID, add missing hashes and media if you would like to add one and remove ext.
#{id:`Axios`,category:`World`,title:``,description:`Axios known for delivering coverage and insight with a distinctive brand of smart brevity.`,uri:`https://api.axios.com/feed`,image:`Axios`,hash:`xS`,media:!0},
#{id:`Mirror UK Tech`,category:`Tech`,title:``,description:`Mirror.co.uk Technology Best Stories, Opinion, Pictures and Video.`,uri:`https://www.mirror.co.uk/tech/?service=rss`,image:`Mirror`,hash:`kM`,media:!0},
#{id:`Vulture`,category:`Media`,title:`658515278`,description:`Vulture, the culture and entertainment site from New York magazine, offers smart, comprehensive coverage of movies, TV, music and much more.`,uri:`http://feeds.feedburner.com/nymag/vulture?fmt=xml`,image:`Vulture`,hash:`vF`,media:!1},
#{id:`CNET`,category:`Tech`,title:`392312083`,description:`CNET is an American media website that publishes Reviews, Articles, and Videos on Technology.`,uri:`https://www.cnet.com/rss/news`,image:`CNET`,hash:`ne`,media:!0},
#{id:`OAN Technology`,category:`Tech`,title:`062680848`,description:`OAN Technology One America News Network Technology.`,uri:`https://www.oann.com/category/tech/feed`,image:`OANN`,hash:`nL`,media:!0},
#{id:`OAN Entertainment`,category:`Media`,title:`744695655`,description:`OAN Entertainment One America News Network Entertainment.`,uri:`https://www.oann.com/category/entertainment/feed`,image:`OANN`,hash:`nO`,media:!0},
#{id:`OAN World`,category:`World`,title:`974000186`,description:`OAN World One America News Network World.`,uri:`https://www.oann.com/feed`,image:`OANN`,hash:`oA`,media:!0},
#{id:`Extra`,category:`Media`,title:`603701318`,description:`Extra TV current events in the mass-entertainment business such as movies, TV, music, etc.`,uri:`https://feeds.extratv.com/atom`,image:`Extra`,hash:`xA`,media:!0},
#{id:`DZone`,category:`Tech`,title:`383977764`,description:`DZone Technology News giving developers a voice, with the goal of providing them with useful and valuable resources at no cost.`,uri:`http://feeds.dzone.com/home`,image:`DZone`,hash:`zD`,media:!0},
#{id:`CBS/Boston`,category:`News`,title:`792032756`,description:`WBZ Boston Local Breaking News From Boston, Massachusetts.`,uri:`https://boston.cbslocal.com/feed`,image:`WBZTV4`,hash:`bC`,media:!0},
#{id:`ReadWrite`,category:`Tech`,title:`828387011`,description:`ReadWrite was founded on April 20, 2003 as ReadWriteWeb.`,uri:`https://readwrite.com/feed`,image:`ReadWrite`,hash:`rR`,media:!0},
#{id:`FOX Sports Golf`,category:`Sports`,title:`136930289`,description:`Fox Sports Golf Unique perspectives on the daily sports topics that matter most.`,uri:`https://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=golf`,image:`FoxSports`,hash:`sF`,media:!0},
#{id:`Inquisitr`,category:`Media`,title:`624070116`,description:`Inquisitr offers a constantly updated mix of the stories to hit the web.`,uri:`https://www.inquisitr.com/feed`,image:`Inquisitr`,hash:`qI`,media:!0},
#{id:`People`,category:`Media`,title:`388531224`,description:`People is an American Weekly Magazine of Celebrity and Human-Interest Stories.`,uri:`https://people.com/tag/news/feed`,image:`People`,hash:`lP`,media:!0},
#{id:`Computer Weekly`,category:`Tech`,title:`740057785`,description:`Computer Weekly stands out from the many Technology Websites.`,uri:`https://www.computerweekly.com/rss/RSS-Feed.xml`,image:`ComputerWeekly`,hash:`Wc`,media:!1},
#{id:`Boston`,category:`World`,title:`012497635`,description:`Boston is a regional website that offers information about Boston, Massachusetts.`,uri:`https://www.boston.com/tag/world-news/feed`,image:`Boston`,hash:`wB`,media:!0},
#{id:`Perez Hilton`,category:`Media`,title:`542267130`,description:`PerezHilton is known for posts covering Gossip Items about Celebrities.`,uri:`https://perezhilton.com/feed`,image:`PerezHilton`,hash:`nZ`,media:!1},
#{id:`TheSun.co.uk Celebrity`,category:`Media`,title:`066491508`,description:`TheSun.co.uk TV and Showbiz Celebrity and Entertainment Updates.`,uri:`https://www.thesun.co.uk/tvandshowbiz/feed`,image:`TheSun`,hash:`uK`,media:!0},
#{id:`Google`,category:`World`,title:`718911891`,description:`Google is a multinational technology company that specializes in Internet-related services and products.`,uri:`https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en`,image:`Google`,hash:`gG`,media:!1},
#{id:`Sportzet`,category:`Sports`,title:`584259679`,description:`Sportzet international Sports and World Headlines.`,uri:`https://www.sportzet.com/feed`,image:`Sportzet`,hash:`zP`,media:!1},
#{id:`The Gadget Flow`,category:`Tech`,title:`150320899`,description:`The Gadget Flow Stay up to date with the tech, gear, and most incredible crowdfunding campaigns.`,uri:`http://feeds.feedburner.com/thegadgetflow`,image:`TheGadgetFlow`,hash:`aH`,media:!0},
#{id:`Elle`,category:`Media`,description:`Elle Magazine is a lifestyle magazine that focuses on fashion, beauty, health, and entertainment.`,uri:`https://www.elle.com/rss/culture.xml`,image:`ELLE`,hash:`lE`,media:!0},
#{id:`PolishNews.co.uk`,category:`World`,description:`Polish News Breaking News From Poland UK World.`,uri:`https://www.polishnews.co.uk/feed`,ext:`https://www.polishnews.co.uk`,image:`Polish`,hash:`pS`,media:true},
#{id:`ABC/South Bend`,category:`News`,description:`ABC WSBT South Bend Indiana serving Northern Indiana and the southern portion of Western Michigan.`,uri:`https://wsbt.com/news/local.rss`,ext:`https://wsbt.com`,image:`WSBT`,hash:`bN`},
#{id:`NBC/Davenport`,category:`News`,description:`NBC KWQC Iowa Davenport serving the Quad Cities area of Southeastern Iowa and Northwestern Illinois.`,uri:`https://www.kwqc.com/templates/2015_XML_FEED?placement=/content/news`,ext:`https://www.kwqc.com`,image:`KWQC`,hash:`qC`},
#{id:`ABC/Flint`,category:`News`,description:`ABC WJRT Michigan Flint Weather, News, Sports, and more.`,uri:`https://www.abc12.com/templates/2015_XML_FEED?placement=/content/news`,ext:`https://www.abc12.com`,image:`WJRT`,hash:`jR`},
#{id:`ABC/Des Moines`,category:`News`,description:`ABC WOI Iowa Des Moines local Des Moines news & weather stories.`,uri:`https://www.weareiowa.com/feed`,ext:`https://www.weareiowa.com`,image:`WOI`,hash:`oW`},
#{id:`NBC/Indianapolis`,category:`News`,description:`NBC WTHR Indiana Indianapolis your source for Weather, radar, traffic, and sports.`,uri:`https://www.wthr.com/feed/public/breaking-news.xml`,ext:`https://www.wthr.com`,image:`WTHR`,hash:`Wr`},
#{id:`NBC/Lincoln`,category:`News`,description:`NBC KSNB Nebraska Lincoln affiliated television station licensed to Superior, Nebraska.`,uri:`https://www.ksnblocal4.com/rss`,ext:`https://www.ksnblocal4.com`,image:`KSNB`,hash:`kB`},
#{id:`ABC/Memphis`,category:`News`,description:`ABC WATN Tennessee Memphis We tell Local Memphis News and Weather Stories.`,uri:`https://www.localmemphis.com/feed`,ext:`https://www.localmemphis.com`,image:`WATN`,hash:`aN`},
#{id:`E! Online`,category:`Media`,description:`E! is an American basic cable channel owned by the NBCUniversal.`,uri:`http://syndication.eonline.com/syndication/feeds/rssfeeds/topstories.xml`,ext:`https://www.eonline.com`,image:`ENews`,hash:`eO`},
#{id:`Pop Sugar`,category:`Media`,description:`Pop Sugar celebrity and style to food and advice – everything you love, all in one place.`,uri:`https://www.popsugar.com/feed`,ext:`https://www.popsugar.com`,image:`PopSugar`,hash:``},
#{id:`Leafly`,category:`Social`,description:`Leafly is the world's online destination to learn about cannabis, find cannabis strains and products, and buy them from legal, licensed retailers.`,uri:`https://www.leafly.com/feed`,ext:`https://www.leafly.com`,image:`Leafly`,hash:`lY`},
#{id:`Bleacher Report`,category:`Sports`,description:`Bleacher Report is a website that focuses on sport and sports culture.`,uri:`https://bleacherreport.com/articles/feed`,ext:`https://bleacherreport.com`,image:`BleacherReport`,hash:`bR`},
#{id:`TieBreaker`,category:`Sports`,description:`Tiebreaker Sports News Headlines from around the world.`,uri:`https://www.tiebreaker.com/feed`,ext:`https://www.tiebreaker.com`,image:`TieBreaker`,hash:`bT`},
#{id:`Digg`,category:`Technology`,description:`Digg the best articles, videos, and original content that the web is talking about right now.`,uri:`https://www.digg.com/rss/index.xml`,ext:`https://www.digg.com`,image:`Digg`,hash:`iG`},
#{id:`Forbes`,category:`Technology`,description:`Forbes is a Global Media Company, focusing on Business, Investing, and Technology.`,uri:`https://www.forbes.com/most-popular/feed`,ext:`https://forbes.com`,image:`Forbes`,hash:`fO`},
#{id:`Quartz`,category:`World`,description:`Quartz covers business, economics, markets, finance, technology, science, and more.`,uri:`https://cms.qz.com/feed`,ext:`https://qz.com`,image:`Quartz`,hash:`qZ`},
#{id:`Central News`,category:`News`,description:`Central News Now latest, breaking Central news on ITV News. Videos, stories and updates`,uri:`https://centralnewsnow.com/feed`,ext:`https://centralnewsnow.com`},
#{id:`Chicago Tribune`,category:`News`,description:`Chicago Tribune Your source for Chicago breaking news, sports, business, entertainment, weather and traffic.`,uri:`https://www.chicagotribune.com/arcio/rss/category/news/breaking/?query=display_date:%5Bnow-2d+TO+now%5D+AND+revision.published:true&sort=display_date:desc#nt=instory-link`,ext:`https://www.chicagotribune.com`},
#{id:`Portland Press Herald`,category:`News`,description:`Portland Press Herald Serves southern Maine from Portland, Cape Elizabeth, Gorham, Falmouth to Lewiston-Auburn.`,uri:`https://www.pressherald.com/feed`,ext:`https://www.pressherald.com`},
#{id:`New York Sun`,category:`News`,description:`The New York Sun was the first successful penny daily newspaper in the United States.`,uri:`https://www.nysun.com/rss.xml`,ext:`https://www.nysun.com`},
#{id:`Salt Lake Tribune`,category:`News`,description:`The Salt Lake Tribune covers news, entertainment, sports and faith for Salt Lake City and the state of Utah.`,uri:`https://www.sltrib.com/arcio/rss/category/news/nation-world/?summary=true`,ext:`https://www.sltrib.com/news/nation-world`},
#{id:`Baltimore Sun`,category:`News`,description:`Baltimore Sun Your source for breaking news, sports, business, entertainment, weather and traffic.`,uri:`https://www.baltimoresun.com/arcio/rss/category/latest/?query=display_date:%5Bnow-2d+TO+now%5D+AND+revision.published:true&sort=display_date:desc#nt=instory-link`,ext:`https://www.baltimoresun.com`},
#{id:`Star Tribune`,category:`News`,description:`Minneapolis Star Tribune the largest newspaper in Minnesota.`,uri:`http://www.startribune.com/rss`,ext:`http://www.startribune.com`},
#{id:`CBS/Palm Springs`,category:`News`,description:`CBS KESQ California Palm Springs Daily News Headlines Morning Forecast Breaking News Severe Weather.`,uri:`https://kesq.com/feed`,ext:`https://kesq.com`},
#{id:`NBC`,category:`News`,description:`NBC WVTM Alabama Birmingham broadcasts across Central Alabama.`,uri:`https://www.wvtm13.com/topstories-rss`,ext:`https://www.wvtm13.com`},
#{id:`CBS`,category:`News`,description:`CBS WIAT Alabama Birmingham Local, Weather, and Live.`,uri:`https://www.cbs42.com/feed`,ext:`https://www.cbs42.com`},
#{id:`ABC`,category:`News`,description:`ABC WDHN Alabama Dothan your source for News, Weather and Sports.`,uri:`https://www.dothanfirst.com/feed`,ext:`https://www.dothanfirst.com`},
#{id:`CBS`,category:`News`,description:`CBS WTVY Alabama Dothan News, Your News Leader, Wiregrass.`,uri:`https://www.wtvy.com/rss`,ext:`https://www.wtvy.com`},
#{id:`CBS`,category:`News`,description:`CBS WHNT Alabama Huntsville North Alabama's News Leader.`,uri:`https://whnt.com/feed`,ext:`https://whnt.com`},
#{id:`CBS`,category:`News`,description:`CBS WKRG Alabama Mobile, Pensacola, Baldwin County and the rest of the Golf Coast.`,uri:`https://www.wkrg.com/feed`,ext:`https://www.wkrg.com`},
#{id:`CBS`,category:`News`,description:`CBS WAKA Alabama Selma Montgomery television station for Central Alabama River Region.`,uri:`https://www.alabamanews.net/feed`,ext:`https://www.alabamanews.net`},
#{id:`ABC`,category:`News`,description:`ABC KHBS Arkansas Fort Smith Trending and Latest Headlines.`,uri:`https://www.4029tv.com/topstories-rss`,ext:`https://www.4029tv.com`},
#{id:`NBC`,category:`News`,description:`NBC KYMA Arizona television station licensed to Yuma, Arizona.`,uri:`https://kyma.com/feed`,ext:`https://kyma.com`},
#{id:`NBC`,category:`News`,description:`NBC KTVE Arkansas El Dorado Your Southern Arkansas Local News Leader.`,uri:`https://www.myarklamiss.com/feed`,ext:`https://www.myarklamiss.com`},
#{id:`FOX`,category:`News`,description:`FOX KFTA Arkansas Fort Smith overs the rapidly growing and vibrant Northwest Arkansas and River Valley.`,uri:`https://www.nwahomepage.com/feed`,ext:`https://www.nwahomepage.com`},
#{id:`CBS`,category:`News`,description:`CBS KFSM Arkansas Fort Smith serving the Arkansas River Valley and Northwest Arkansas.`,uri:`https://5newsonline.com/feed`,ext:`https://5newsonline.com`},
#{id:`ABC`,category:`News`,description:`ABC KRDO Colorado Springs Latest News Local and National.`,uri:`https://krdo.com/feed`,ext:`https://krdo.com`},
#{id:`CBS`,category:`News`,description:`CBS KREX Colorado Grand Junction The Latest News and Updates in Local News brought to you by the team at KREX.`,uri:`https://www.westernslopenow.com/feed`,ext:`https://www.westernslopenow.com`},
#{id:`NBC`,category:`News`,description:`NBC KUSA Colorado News Join the photographers and reporters of as they explore every corner of our state.`,uri:`http://rssfeeds.9news.com/kusa/home&x=1`,ext:`http://www.9news.com`},
#{id:`ABC`,category:`News`,description:`ABC WTNH Connecticut Hartford New Haven Local and National Headlines and News.`,uri:`https://www.wtnh.com/feed`,ext:`https://www.wtnh.com`},
#{id:`NBC`,category:`News`,description:`NBC WESH Florida television station serving Orlando, Florida, United States that is licensed to Daytona Beach.`,uri:`https://www.wesh.com/topstories-rss`,ext:`https://www.wesh.com`},
#{id:`NBC`,category:`News`,description:`NBC WFLA Florida Get your local news from News Channel 8, On Your Side for Tampa Bay, St. Petersburg and central Florida.`,uri:`https://www.wfla.com/feed`,ext:`https://www.wfla.com`},
#{id:`CBS`,category:`News`,description:`CBS WSWG Georgia Albany You can watch local news, daytime shows, primetime shows, late night programming on WSWG.`,uri:`https://www.southgatv.com/feed`,ext:`https://www.southgatv.com`},
#{id:`ABC`,category:`News`,description:`ABC WJBF Georgia Augsusta Breaking News, Weather, and Sports.`,uri:`https://www.wjbf.com/feed`,ext:`https://www.wjbf.com`},
#{id:`CBS`,category:`News`,description:`CBS WRBL Georgia Columbus serving the Chattahoochee Valley of west-central Georgia and east-central Alabama.`,uri:`https://www.wrbl.com/feed`,ext:`https://www.wrbl.com`},
#{id:`NBC`,category:`News`,description:`NBC WLTZ Georgia Putting you first with news, weather, and sports in Columbus, Phoenix City, Auburn, Opelika, and the surrounding area.`,uri:`https://www.wltz.com/feed`,ext:`https://www.wltz.com`},
#{id:`NBC`,category:`News`,description:`NBC WMGT Georgia the second commercial station started in the Middle Georgia market.`,uri:`https://41nbc.com/feed`,ext:`https://41nbc.com`},
#{id:`NBC`,category:`News`,description:`NBC WSAV Georgia faithfully served Savannah, Statesboro, Hilton Head and our many neighbors.`,uri:`https://www.wsav.com/feed`,ext:`https://www.wsav.com`},
#{id:`CBS`,category:`News`,description:`CBS KIDK Idaho Falls licensed to Idaho Falls, Idaho, United States and also serving Pocatello.`,uri:`https://localnews8.com/feed`,ext:`https://localnews8.com`},
#{id:`ABC`,category:`News`,description:`ABC KIFI Idaho Falls News Press and Gazette Company.`,uri:`https://localnews8.com/feed`,ext:`https://localnews8.com`},
#{id:`ABC`,category:`News`,description:`ABC WSIL Southern Illinois providing breaking news, sports and weather information.`,uri:`https://wsiltv.com/feed`,ext:`https://wsiltv.com`},
#{id:`CBS`,category:`News`,description:`CBS WCIA Illinois Champaign Your Central Illinois News, Weather, and Sports Leader.`,uri:`https://www.wcia.com/feed`,ext:`https://www.wcia.com`},
#{id:`ABC`,category:`News`,description:`ABC WQAD Illinois Moline serving the Quad Cities of West-Central Illinois.`,uri:`https://wqad.com/feed`,ext:`https://wqad.com`},
#{id:`CBS`,category:`News`,description:`CBS WMBD Illinois Peoria We tell local Peoria news & weather stories.`,uri:`https://www.centralillinoisproud.com/feed`,ext:`https://www.centralillinoisproud.com`},
#{id:`ABC`,category:`News`,description:`ABC WTVO Illinois Rockford local Rockford news & weather stories.`,uri:`https://www.mystateline.com/feed`,ext:`https://www.mystateline.com`},
#{id:`ABC`,category:`News`,description:`ABC WEHT Illinois serving the Tri states of Indiana, Kentucky, and Illinois.`,uri:`https://www.tristatehomepage.com/feed`,ext:`https://www.tristatehomepage.com`},
#{id:`NBC`,category:`News`,description:`NBC WGEM Illinois Quincy the dominant #1 NBC affiliate in Quincy, Illinois.`,uri:`https://wgem.com/feed`,ext:`https://wgem.com`},
#{id:`NBC`,category:`News`,description:`NBC WREX Illinois Rockford live streaming online is an NBC-affiliated television station that works in Rockford, Illinois.`,uri:`https://wrex.com/feed`,ext:`https://wrex.com`},
#{id:`CBS`,category:`News`,description:`CBS WHBF Illinois Rock Island The Latest News and Updates in Local News brought to you by the team at WHBF.`,uri:`https://www.ourquadcities.com/feed`,ext:`https://www.ourquadcities.com`},
#{id:`NBC`,category:`News`,description:`NBC KYOU Iowa affiliated television station for the area of Southeastern Iowa and Northeastern Missouri.`,uri:`https://www.kyoutv.com/feed`,ext:`https://www.kyoutv.com`},
#{id:`NBC`,category:`News`,description:`NBC KTIV Iowa Our mission is to provide you with the latest news, weather and sports in Siouxland.`,uri:`https://ktiv.com/feed`,ext:`https://ktiv.com`},
#{id:`NBC`,category:`News`,description:`NBC KWWL eastern Iowa's homepage for breaking news, severe weather, video and sports, with newsrooms in Waterloo, Dubuque, Cedar Rapids and Iowa City.`,uri:`https://kwwl.com/feed`,ext:`https://kwwl.com`},
#{id:`NBC`,category:`News`,description:`NBC KSNT Kansas We tell local Topeka and Northeast Kansas News & Weather stories. Local News That Matters.`,uri:`https://www.ksnt.com/feed`,ext:`https://www.ksnt.com`},
#{id:`NBC`,category:`News`,description:`NBC WNKY Kentucky Bowling Green News, Weather & Community.`,uri:`https://www.wnky.com/feed`,ext:`https://www.wnky.com`},
#{id:`ABC`,category:`News`,description:`ABC WTVQ Kentucky Lexington Local Late Breaking News.`,uri:`https://www.wtvq.com/feed`,ext:`https://www.wtvq.com`},
#{id:`ABC`,category:`News`,description:`ABC KLAX Louisiana Alexandria was launched on March 3, link 1983 originally as an independent station.`,uri:`http://klax-tv.com/feed`,ext:`http://klax-tv.com`},
#{id:`NBC`,category:`News`,description:`NBC WVLA Louisiana Baton Rouge Local 33 News is a NBC News affiliate serving Baton Rouge and the surrounding areas.`,uri:`https://www.brproud.com/feed`,ext:`https://www.brproud.com`},
#{id:`CBS`,category:`News`,description:`CBS KLFY Louisiana Lafayette we do what we do to make Lafayette, and the rest of Acadiana a better place to live.`,uri:`https://www.klfy.com/feed/`,ext:`https://www.klfy.com`},
#{id:`NBC`,category:`News`,description:`NBC KADN Louisiana Lafayette a mix of News, Weather, Sports, and Entertainment with a Focus on Families and the Community.`,uri:`https://kadn.com/feed`,ext:`https://kadn.com`},
#{id:`NBC`,category:`News`,description:`NBC WMTV Maine Portland We are a local Internet TV Station dedicated to serving our community with local news.`,uri:`https://www.wmtw.com/topstories-rss`,ext:`https://www.wmtw.com`},
#{id:`ABC`,category:`News`,description:`ABC WMDT Marlyand Salisbury for News, Traffic, Sports, and Entertainment.`,uri:`https://www.wmdt.com/feed`,ext:`https://www.wmdt.com`},
#{id:`CBS`,category:`News`,description:`CBS WBKB Michigan Alpena For all your local news, sports, and weather updates.`,uri:`http://www.wbkb11.com/feed`,ext:`http://www.wbkb11.com`},
#{id:`NBC`,category:`News`,description:`NBC WCSH Maine Portland serving Southern Maine as well as Eastern and Northern New Hampshire.`,uri:`http://rssfeeds.wcsh6.com/newscentermaine/news&x=1`,ext:`https://www.newscentermaine.com`},
#{id:`NBC`,category:`News`,description:`NBC WWLP Massachussetts Springfield We tell local Springfield news & weather stories.`,uri:`https://www.wwlp.com/feed`,ext:`https://www.wwlp.com`},
#{id:`CBS`,category:`News`,description:`CBS WJMN Michigan Escanaba serving the Central and Western Upper Peninsula of Michigan.`,uri:`https://www.upmatters.com/feed`,ext:`https://www.upmatters.com`},
#{id:`ABC`,category:`News`,description:`ABC WBUP Michigan Marquette serving the greater area of Michigan.`,uri:`https://abc10up.com/feed`,ext:`https://abc10up.com`},
#{id:`NBC`,category:`News`,description:`NBC KBJR Minnesota Duluth Your Weather Authority has a free news.`,uri:`https://kbjr6.com/feed`,ext:`https://kbjr6.com`},
#{id:`NBC`,category:`News`,description:`NBC KTTC Minnesota Rochester The area's most watched news team provides the latest news, weather and sports on-air and online.`,uri:`https://kttc.com/feed`,ext:`https://kttc.com`},
#{id:`CBS`,category:`News`,description:`CBS WCBI Mississippi Columbus Tupelo serving northeastern Mississippi and northwestern Alabama.`,uri:`https://www.wcbi.com/feed`,ext:`https://www.wcbi.com`},
#{id:`ABC`,category:`News`,description:`ABC KMIZ Missouri Columbia Jefferson City News, Weather, and Sports.`,uri:`https://abc17news.com/feed`,ext:`https://abc17news.com`},
#{id:`ABC`,category:`News`,description:`ABC KODE Missouri Joplin an ABC-affiliated television station licensed to Joplin, Missouri.`,uri:`https://www.fourstateshomepage.com/feed`,ext:`https://www.fourstateshomepage.com`},
#{id:`CBS`,category:`News`,description:`CBS KOLR Missouri Springfield offering Local News, Weather, Sports, and Traffic.`,uri:`https://www.ozarksfirst.com/feed`,ext:`https://www.ozarksfirst.com`},
#{id:`NBC`,category:`News`,description:`NBC KNEP Nebraska Scottsbluff News, Weather, and Stories.`,uri:`https://www.ksnblocal4.com/rss`,ext:`https://www.ksnblocal4.com`},
#{id:`ABC`,category:`News`,description:`ABC WMUR New Hampshire Manchesters most reliable source for Breaking News.`,uri:`https://www.wmur.com/topstories-rss`,ext:`https://www.wmur.com`},
#{id:`ABC`,category:`News`,description:`ABC KVIA New Mexico Las Cruces Breaking News Daily updates and National Headlines.`,uri:`https://kvia.com/feed`,ext:`https://kvia.com`},
#{id:`ABC`,category:`News`,description:`ABC WAPT Mississippi Jackson News The One To Watch.`,uri:`https://www.wapt.com/topstories-rss`,ext:`https://www.wapt.com`},
#{id:`CBS`,category:`News`,description:`CBS WJTV Mississippi Jackson Local Mississippi breaking news and weather from CBS 12 News WJTV.`,uri:`https://www.wjtv.com/feed`,ext:`https://www.wjtv.com`},
#{id:`CBS`,category:`News`,description:`CBS WWTV Michigan Cadillac Traverse City News, Weather, Sports, Traffic.`,uri:`https://www.9and10news.com/feed`,ext:`https://www.9and10news.com`},
#{id:`ABC`,category:`News`,description:`ABC KSVI Montana Billings a community portal powered by ABC.`,uri:`https://www.yourbigsky.com/feed`,ext:`https://www.yourbigsky.com`},
#{id:`NBC`,category:`News`,description:`NBC KXGN Montana Glendive News Stories and Videos.`,uri:`http://web.kxgn.com/feed`,ext:`http://web.kxgn.com`},
#{id:`ABC`,category:`News`,description:`ABC WIVT New York Binghampton Latest News and Updates in News brought to you by the team at WIVT.`,uri:`https://www.binghamtonhomepage.com/feed`,ext:`https://www.binghamtonhomepage.com`},
#{id:`CBS`,category:`News`,description:`CBS WBNG New York Binghampton Television Market which serves the Southern Tier of New York State.`,uri:`https://wbng.com/feed`,ext:`https://wbng.com`},
#{id:`NBC`,category:`News`,description:`NBC WETM New York Elmira The Latest News and Updates in news brought to you by the team at WETM.`,uri:`https://www.mytwintiers.com/feed`,ext:`https://www.mytwintiers.com`},
#{id:`NBC`,category:`News`,description:`NBC WPTZ New York Plattsburge your source for the latest local headlines.`,uri:`https://www.mynbc5.com/topstories-rss`,ext:`https://www.mynbc5.com`},
#{id:`ABC`,category:`News`,description:`ABC WSYR New York Syracuse local Syracuse news & weather stories.`,uri:`https://www.localsyr.com/feed`,ext:`https://www.localsyr.com`},
#{id:`ABC`,category:`News`,description:`ABC WUTR New York Utica making Utica & the rest of central New York a better place to live.`,uri:`https://www.cnyhomepage.com/feed`,ext:`https://www.cnyhomepage.com`},
#{id:`ABC`,category:`News`,description:`ABC WWTI New York Waterton serving the public with News and Headlines.`,uri:`https://www.informnny.com/feed`,ext:`https://www.informnny.com`},
#{id:`NBC`,category:`News`,description:`NBC WVNC New York Waterton News, Weather, and Sports for Watertown, New York.`,uri:`https://www.nbcwatertown.com/feed`,ext:`https://www.nbcwatertown.com`},
#{id:`CBS`,category:`News`,description:`CBS WFMY North Carolina Greensboro serving the Piedmont Triad region Greensboro, Winston-Salem, High Point.`,uri:`http://rssfeeds.wfmynews2.com/wfmynews2-local&x=1`,ext:`https://www.wfmynews2.com`},
#{id:`CBS`,category:`News`,description:`CBS WNCT North Carolina Greenville serving Eastern North Carolina 's Inner Banks region.`,uri:`https://www.wnct.com/feed`,ext:`https://www.wnct.com`},
#{id:`CBS`,category:`News`,description:`CBS WWAY North Carolina Wilmington licensed to Wilmington, North Carolina, United States and serving the Cape Fear region.`,uri:`https://www.wwaytv3.com/feed`,ext:`https://www.wwaytv3.com`},
#{id:`CBS`,category:`News`,description:`CBS WWAY North Carolina Wilmington Local Up to the Minute Late Breaking News.`,uri:`https://www.wwaytv3.com/feed`,ext:`https://www.wwaytv3.com`},
#{id:`NBC`,category:`News`,description:`NBC WXII North Carolina Wilmington Piedmont Triad's most reliable source for breaking news.`,uri:`https://www.wxii12.com/topstories-rss`,ext:`https://www.wxii12.com`},
#{id:`CBS`,category:`News`,description:`CBS KXMB North Dakota Bismarck Your Eye on Dakota.`,uri:`https://www.kxnet.com/feed`,ext:`https://www.kxnet.com`},
#{id:`NBC`,category:`News`,description:`NBC KVLY North Dakota Fargo The station is most notable for its broadcast tower which is the fourth-tallest above-ground structure in the world.`,uri:`https://www.valleynewslive.com/rss`,ext:`https://www.valleynewslive.com`},
#{id:`ABC`,category:`News`,description:`ABC WYTV Ohio Youngstown We Believe in This Valley.`,uri:`https://www.wytv.com/feed`,ext:`https://www.wytv.com`},
#{id:`CBS`,category:`News`,description:`CBS WKBN Ohio Youngstown watch local news, daytime shows, primetime shows, and late night programming.`,uri:`https://www.wkbn.com/feed`,ext:`https://www.wkbn.com`},
#{id:`NBC`,category:`News`,description:`NBC WHIZ Ohio Zanesville NBC-affiliated television station licensed to Zanesville, Ohio, United States.`,uri:`https://whiznews.com/feed`,ext:`https://whiznews.com`},
#{id:`NBC`,category:`News`,description:`NBC KTVZ Oregon Bend Stories, News, Sports, and Weather.`,uri:`https://ktvz.com/feed`,ext:`https://ktvz.com`},
#{id:`NBC`,category:`News`,description:`NBC KOTI Oregon Medford Klamath Falls Latest News, Weather Updates, and Sports Reporting.`,uri:`https://kobi5.com/feed`,ext:`https://kobi5.com`},
#{id:`CBS`,category:`News`,description:`CBS WTAJ Pennsylvania Altoona serving West-Central Pennsylvania.`,uri:`https://www.wearecentralpa.com/feed`,ext:`https://www.wearecentralpa.com`},
#{id:`ABC`,category:`News`,description:`ABC WJET Pennsylvania Erie Bringing You News, Weather, Sports, and Entertainment.`,uri:`https://www.yourerie.com/feed`,ext:`https://www.yourerie.com`},
#{id:`ABC`,category:`News`,description:`ABC WHTM Pennsylvania Harrisburg breaking news, latest headlines, severe weather, sports, and traffic.`,uri:`https://www.abc27.com/feed`,ext:`https://www.abc27.com`},
#{id:`NBC`,category:`News`,description:`NBC WGAL Pennsylvania Lancaster Stay in the know with the top stories of the day. Get all the latest Harrisburg, Lancaster and York news.`,uri:`https://www.wgal.com/topstories-rss`,ext:`https://www.wgal.com`},
#{id:`ABC`,category:`News`,description:`ABC WNEP Pennsylvania Scranton News, Weather and Sports Proud to Serve Northeastern and Central Pennsylvania.`,uri:`https://wnep.com/feed`,ext:`https://wnep.com`},
#{id:`CBS`,category:`News`,description:`CBS WYOU Pennsylvania Scranton affiliated television station licensed to Scranton, Pennsylvania, also serving Wilkes-Barre.`,uri:`https://www.pahomepage.com/feed`,ext:`https://www.pahomepage.com`},
#{id:`ABC`,category:`News`,description:`ABC WOLO South Carolina Colombia Serving as Columbia’s innovative television station since 1953.`,uri:`https://www.abccolumbia.com/feed`,ext:`https://www.abccolumbia.com`},
#{id:`CBS`,category:`News`,description:`CBS WLTX South Carolina Colombia WLTX is the 2nd oldest continuously operating TV station in South Carolina.`,uri:`http://rssfeeds.wltx.com/wltx-local&x=1`,ext:`https://www.wltx.com`},
#{id:`NBC`,category:`News`,description:`NBC WYFF South Carolina Greenville News Coverage, Sports, Traffic and, Weather.`,uri:`https://www.wyff4.com/topstories-rss`,ext:`https://www.wyff4.com`},
#{id:`NBC`,category:`News`,description:`NBC WBRE Pennsylvania Wilkes Barre Eye Witness News, Sports, Traffic, and Weather.`,uri:`https://www.pahomepage.com/feed`,ext:`https://www.pahomepage.com`},
#{id:`CBS`,category:`News`,description:`CBS WSPA South Carolina Spartanburg Greenville News, weather and sports for Greenville, Spartanburg, Anderson, and Pickens, SC and Asheville, Hendersonville, NC.`,uri:`https://www.wspa.com/feed`,ext:`https://www.wspa.com`},
#{id:`CBS`,category:`News`,description:`CBS WDEF Tennessee Chattanooga Live Late Breaking News and Updates.`,uri:`https://wdef.com/feed`,ext:`https://wdef.com`},
#{id:`ABC`,category:`News`,description:`ABC WBBJ Tennessee Jackson Local News for the greater Tennessee.`,uri:`https://www.wbbjtv.com/feed`,ext:`https://www.wbbjtv.com`},
#{id:`ABC`,category:`News`,description:`ABC WJHL Tennessee Johnson City the source for breaking local, weather and sports news in the Tri-Cities.`,uri:`https://www.wjhl.com/feed`,ext:`https://www.wjhl.com`},
#{id:`NBC`,category:`News`,description:`NBC KRBC Texas Abilene the station is owned by Mission Broadcasting.`,uri:`https://www.bigcountryhomepage.com/feed`,ext:`https://www.bigcountryhomepage.com`},
#{id:`NBC`,category:`News`,description:`NBC KAMR Texas Amarillo The Latest News and Updates in About Us brought to you by the team at KAMR.`,uri:`https://www.myhighplains.com/feed`,ext:`https://www.myhighplains.com`},
#{id:`NBC`,category:`News`,description:`NBC KVEO Texas Brownsville serves the entire surrounding metropolitan area, known as the Rio Grande Valley.`,uri:`https://www.kveo.com/feed`,ext:`https://www.kveo.com`},
#{id:`NBC`,category:`News`,description:`NBC KETK Texas Jacksonville serving Tyler and Longview, Texas.`,uri:`https://www.easttexasmatters.com/feed`,ext:`https://www.easttexasmatters.com`},
#{id:`ABC`,category:`News`,description:`ABC KAMC Texas Lubbock We tell local Lubbock news & weather stories.`,uri:`https://www.everythinglubbock.com/feed`,ext:`https://www.everythinglubbock.com`},
#{id:`ABC`,category:`News`,description:`ABC KMID Texas Midland owned and operated by Nexstar Broadcasting Group, which is headquartered in Irving, Texas.`,uri:`https://www.yourbasin.com/feed`,ext:`https://www.yourbasin.com`},
#{id:`NBC`,category:`News`,description:`NBC KSAN Texas San Angelo News live streaming online.`,uri:`https://www.conchovalleyhomepage.com/feed`,ext:`https://www.conchovalleyhomepage.com`},
#{id:`CBS`,category:`News`,description:`CBS KXII Texas Sherman also serving Ada.`,uri:`https://www.kxii.com/content/news/index.rss2`,ext:`https://www.kxii.com`},
#{id:`NBC`,category:`News`,description:`NBC KTAL Texas Texarkana we bring you local news that matters, including Texarkana First News.`,uri:`https://www.arklatexhomepage.com/feed`,ext:`https://www.arklatexhomepage.com`},
#{id:`NBC`,category:`News`,description:`NBC KFDX Texas Wichita Falls News and Programming, with weather and traffic.`,uri:`https://www.texomashomepage.com/feed`,ext:`https://www.texomashomepage.com`},
#{id:`ABC`,category:`News`,description:`ABC WVNY Vermont Burlington Latest News and Updates in News brought to you by the team at Local 22/44 News.`,uri:`https://www.mychamplainvalley.com/feed`,ext:`https://www.mychamplainvalley.com`},
#{id:`ABC`,category:`News`,description:`ABC WVEC Virginia Hampton serving the Hampton Roads area of southeastern Virginia.`,uri:`http://rssfeeds.13newsnow.com/wvec/local&x=1`,ext:`http://www.13newsnow.com`},
#{id:`NBC`,category:`News`,description:`NBC WAVY Virginia Norfolk serving Chesapeake, Newport News, Hampton, Portsmouth, Virginia Beach, and Suffolk & the rest of Virginia.`,uri:`https://www.wavy.com/feed`,ext:`https://www.wavy.com`},
#{id:`ABC`,category:`News`,description:`ABC WBOY West Virginia Clarksburg local news & weather for north central West Virginia.`,uri:`https://www.wboy.com/feed`,ext:`https://www.wboy.com`},
#{id:`CBS`,category:`News`,description:`CBS WOWK West Virginia Huntington we do what we do to make Charleston-Huntington & the rest of West Virginia, Ohio, and Kentucky a better place to live.`,uri:`https://www.wowktv.com/feed`,ext:`https://www.wowktv.com`},
#{id:`ABC`,category:`News`,description:`ABC WOAY West Virginia Oak Hill Bluefield late-breaking news, weather, and sports coverage.`,uri:`https://woay.tv/feed`,ext:`https://woay.tv`},
#{id:`CBS`,category:`News`,description:`CBS WVNS West Virginia Lewisburg Bluefield serving the Beckley and Oak Hill also covering portions of southwestern Virginia.`,uri:`https://www.wvnstv.com/feed`,ext:`https://www.wvnstv.com`},
#{id:`ABC`,category:`News`,description:`ABC WTRF West Virginia Wheeling We tell local Wheeling news & weather stories.`,uri:`https://www.wtrf.com/feed`,ext:`https://www.wtrf.com`},
#{id:`ABC`,category:`News`,description:`ABC WYOW Wisconsin Eagle River the station is owned by Quincy Media.`,uri:`https://waow.com/feed`,ext:`https://waow.com`},
#{id:`ABC`,category:`News`,description:`ABC WQOW Wisconsin Eau Claire Digging Deeper into issues that affect the Chippewa Valley.`,uri:`https://wqow.com/feed`,ext:`https://wqow.com`},
#{id:`ABC`,category:`News`,description:`ABC WXOW Wisconsin La Crosse your home for La Crosse area news, weather, and sports.`,uri:`https://wxow.com/feed`,ext:`https://wxow.com`},
#{id:`CBS`,category:`News`,description:`CBS KBJR Wisconsin works in Superior, Duluth, Minnesota, Wisconsin areas.`,uri:`https://kbjr6.com/feed`,ext:`https://kbjr6.com`},
#{id:`ABC`,category:`News`,description:`ABC WISN Wisconsin Wausau the day’s biggest stories and ones you may have missed.`,uri:`https://www.wisn.com/topstories-rss`,ext:`https://www.wisn.com`},
#{id:`NBC`,category:`News`,description:`NBC15 Wisconsin Southwestern News, Sports, Weather and Live Updates.`,uri:`https://www.nbc15.com/content/news/index.rss`,ext:`https://www.nbc15.com`},
#{id:`Channel News Asia`,category:`World`,description:`Channel News Asia is an English language news channel based in Singapore.`,uri:`https://www.channelnewsasia.com/rssfeeds/8395986`,ext:`https://www.channelnewsasia.com/news/international`},
