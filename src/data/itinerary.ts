export interface Attraction {
  name: string;
  duration?: string;
  type: 'free' | 'paid';
  address?: string;
  description: string;
  highlights?: string[];
}

export interface Restaurant {
  name: string;
  signature?: string[];
  priceRange?: string;
  address?: string;
  description?: string;
}

export interface Hotel {
  name: string;
  address: string;
  image?: string;
  description?: string;
}

export interface Transport {
  type: 'flight' | 'car' | 'boat';
  summary: string;
  details?: string;
}

export interface DayPlan {
  day: number;
  date: string;
  weekday: string;
  location: string;
  hero: string;
  oneLine: string;
  carHours?: string;
  transport: Transport[];
  attractions: Attraction[];
  restaurants?: Restaurant[];
  hotel?: Hotel;
}

export const itinerary: DayPlan[] = [
  {
    day: 1,
    date: '2026-06-28',
    weekday: '周日',
    location: '北京 → 哈尔滨 → 五大连池',
    hero: '/images/destinations/wudalianchi-bailong-lake.jpg',
    oneLine: '从大兴机场出发，抵达哈尔滨后包车前往五大连池，开启火山秘境之旅。',
    carHours: '约 5 小时',
    transport: [
      {
        type: 'flight',
        summary: '南方航空 CZ6204 · 空客 320',
        details: '08:30 大兴国际机场起飞 · 10:35 太平国际机场 T2 落地 · 飞行 2h5m',
      },
      {
        type: 'car',
        summary: '18 座中巴包车',
        details: '乘客 10 位 · 行李 8 件 · 用车 8 小时 · 哈尔滨直达五大连池',
      },
    ],
    attractions: [],
    restaurants: [
      {
        name: '哈尔滨午餐（推荐）',
        description: '老昌春饼 / 雪龙筋饼 / 金鹏鱼肉馆 / 永盛园饭店 / 老关东铁锅炖等本地经典。',
        signature: ['东北菜', '锅包肉', '铁锅炖'],
      },
      {
        name: '五大连池 · 矿泉鱼村',
        address: '五大连池市药泉东路',
        priceRange: '人均 80-120 元',
        signature: ['清蒸矿泉鱼', '铁锅炖矿泉鱼'],
        description: '选用五大连池自然生长的野生鲤鱼，仅用葱姜去腥，保留鱼肉本鲜，肉质紧实无土腥味。',
      },
    ],
    hotel: {
      name: '五大连池家豪商务酒店',
      address: '药泉东路',
      image: '/images/hotels/hotel-jiahao.jpg',
    },
  },
  {
    day: 2,
    date: '2026-06-29',
    weekday: '周一',
    location: '五大连池风景区',
    hero: '/images/destinations/wudalianchi-yaoquan-mountain.jpg',
    oneLine: '探秘世界三大冷矿泉，登药泉山俯瞰火山群，白龙湖赏三池日落。',
    transport: [
      {
        type: 'car',
        summary: '18 座中巴包车',
        details: '景区内全天用车 · 安全行程保障',
      },
    ],
    attractions: [
      {
        name: '五大连池世界地质公园博物馆',
        type: 'free',
        duration: '2-3 小时',
        address: '黑河市五大连池市西龙门山路',
        description:
          '集中展现五大连池的历史沿革、民族民俗文化，包括国家级非物质文化遗产"火山圣水节"、钟灵禅寺等人文元素。',
        highlights: ['世界地质公园', '火山圣水节非遗', '人文与地质交融'],
      },
      {
        name: '北药泉',
        type: 'paid',
        duration: '30 分钟-1 小时',
        address: '五大连池风景区药泉西路',
        description:
          '与法国维希矿泉、俄罗斯高加索矿泉并称"世界三大冷矿泉"，水温常年保持 2-4℃，富含数十种矿物质与微量元素。',
        highlights: ['世界三大冷矿泉', '水温 2-4℃', '含丰富矿物质', '可自带瓶接冷泉水'],
      },
      {
        name: '药泉山',
        type: 'free',
        duration: '1-3 小时',
        address: '五大连池风景区二龙泉路',
        description:
          '五大连池火山群中较小、海拔较低的火山，以"火山地质奇观 + 佛教文化 + 康养圣水"为核心特色，登顶可俯瞰五大连池全景。',
        highlights: ['俯瞰五大连池', '免费开放', '佛教文化', '康养圣水'],
      },
      {
        name: '白龙湖（三池）',
        type: 'free',
        duration: '日落时分最佳',
        address: '五大连池镇火山堰塞湖景区',
        description:
          '五大连池火山堰塞湖群中的第三池，面积较大、景观较丰富。"一湖两界"地质奇观——西岸新期火山熔岩，东岸远古泥沙岩。丰水期 14 座火山全貌倒映湖中。',
        highlights: ['三池日落', '一湖两界', '14 座火山倒影', '冬季冰断奇观'],
      },
    ],
    hotel: {
      name: '五大连池家豪商务酒店',
      address: '药泉东路',
      image: '/images/hotels/hotel-jiahao.jpg',
    },
  },
  {
    day: 3,
    date: '2026-06-30',
    weekday: '周二',
    location: '五大连池风景区',
    hero: '/images/destinations/wudalianchi-longmen-shizhai.jpg',
    oneLine: '深入龙门石寨触摸凝固的火山教科书，温泊赏"全年不冻"的火山湿地。',
    transport: [
      {
        type: 'car',
        summary: '18 座中巴包车',
        details: '景区内全天用车 · 安全行程保障',
      },
    ],
    attractions: [
      {
        name: '龙门石寨景区',
        type: 'paid',
        duration: '1-3 小时',
        address: '五大连池风景区内',
        description:
          '五大连池世界地质公园中最具震撼力的火山遗址之一，以"石海长城"般的熔岩地貌闻名，被誉为"凝固的火山教科书"。结壳状熔岩形成巨型石块堆砌，熔岩石块平均直径 3-5 米，总堆积面积近 50 平方公里。',
        highlights: ['全球罕见结壳状熔岩', '中国保存最完整古熔岩台地', '火山生态奇迹', '秋季彩色火山'],
      },
      {
        name: '温泊景区',
        type: 'paid',
        duration: '1-3 小时',
        address: '五大连池风景区内',
        description:
          '五大连池风景区内最具童话色彩的火山湿地景观，以"三泊三景"为核心特色，是景区内少有的"全年不冻"水域，被誉为"火山地质博物馆里的盆景"。',
        highlights: ['全年不冻水域', '三泊三景', '火山湿地盆景'],
      },
    ],
    hotel: {
      name: '五大连池家豪商务酒店',
      address: '药泉东路',
      image: '/images/hotels/hotel-jiahao.jpg',
    },
  },
  {
    day: 4,
    date: '2026-07-01',
    weekday: '周三',
    location: '五大连池 → 嘉荫',
    hero: '/images/destinations/jiayin-riverside-park.jpg',
    oneLine: '北上前往中俄边境小城嘉荫，入住江畔民宿，品尝黑龙江铁锅炖江鱼。',
    carHours: '约 7 小时',
    transport: [
      {
        type: 'car',
        summary: '18 座中巴包车',
        details: '乘客 10 位 · 行李 8 件 · 用车 8 小时 · 五大连池北上嘉荫',
      },
    ],
    attractions: [],
    restaurants: [
      {
        name: '嘉荫江鱼宴',
        description:
          '黑龙江里现捞的活鱼，柴火慢炖，鱼肉鲜嫩入味，汤汁泡饭或蘸着玉米饼子吃，是东北菜的灵魂。配菜推荐山野菜与山野菌——刺嫩芽煎蛋、蕨菜炒肉、榛蘑炖小鸡。',
        signature: ['铁锅炖江鱼', '刺嫩芽煎蛋', '蕨菜炒肉', '榛蘑炖小鸡'],
      },
    ],
    hotel: {
      name: '嘉荫江畔民宿',
      address: '嘉荫县城临江路一带',
    },
  },
  {
    day: 5,
    date: '2026-07-02',
    weekday: '周四',
    location: '嘉荫（恐龙国家地质公园）',
    hero: '/images/destinations/jiayin-dinosaur-park.jpg',
    oneLine: '在中俄边境小兴安岭脚下，赴一场穿越 6500 万年的白垩纪恐龙之约。',
    transport: [
      {
        type: 'car',
        summary: '18 座中巴包车',
        details: '景区间接送用车',
      },
    ],
    attractions: [
      {
        name: '嘉荫恐龙国家地质公园',
        type: 'paid',
        duration: '2-3 小时',
        address: '黑龙江省伊春市嘉荫县红光乡',
        description:
          '中俄边境的小兴安岭脚下，藏着一座穿越 6500 万年的白垩纪王国。巨型恐龙雕塑错落林间，神州恐龙博物馆里"神州第一龙"骨架静静伫立，真实化石与岩层剖面诉说远古故事。',
        highlights: ['神州第一龙', '白垩纪王国', '真实化石', '岩层剖面'],
      },
      {
        name: '嘉荫江边公园',
        type: 'free',
        duration: '1-2 小时',
        address: '伊春市嘉荫县临江路 21 号',
        description:
          '伊春市嘉荫县标志性的滨江公园，沿黑龙江岸线延伸约 2 公里，可清晰眺望俄罗斯阿穆尔州的异国村落与茂密森林。夏季江面游船穿梭，冬季冰封如白色巨龙。',
        highlights: ['中俄界江风光', '2 公里观江步道', '眺望俄罗斯', '界江日落'],
      },
      {
        name: '223 界碑',
        type: 'free',
        duration: '30 分钟',
        address: '伊春市嘉荫县朝阳镇江边公园',
        description:
          '中俄边境线上的重要地标，编号"223"清晰刻于碑身，花岗岩材质庄重威严。位于黑龙江主航道中心线上，碑旁观江平台可眺望俄罗斯巴斯克沃村，江面宽度约 800 米。',
        highlights: ['一脚跨两国', '花岗岩界碑', '眺望俄罗斯村庄', '国门地标'],
      },
    ],
    hotel: {
      name: '嘉荫江畔民宿',
      address: '嘉荫县城临江路一带',
    },
  },
  {
    day: 6,
    date: '2026-07-03',
    weekday: '周五',
    location: '嘉荫（茅兰沟）',
    hero: '/images/destinations/jiayin-maolan-gully.jpg',
    oneLine: '探秘"北方小九寨"茅兰沟，深百米的花岗岩峡谷与翡翠潭水。',
    transport: [
      {
        type: 'car',
        summary: '18 座中巴包车',
        details: '前往茅兰沟景区用车',
      },
    ],
    attractions: [
      {
        name: '茅兰沟国家森林公园',
        type: 'paid',
        duration: '3-5 小时',
        address: '黑龙江省伊春市嘉荫县向阳乡 G331',
        description:
          '被称为"北方小九寨"，集山奇、林茂、瀑美、幽潭于一身。1.5 亿年前花岗岩断裂形成的峡谷深达百米，拥有黑龙潭、仙女池、三阶潭等 20 余处核心景点，溪流与断崖交织如天然迷宫。',
        highlights: ['北方小九寨', '亿年花岗岩峡谷', '黑龙潭翡翠潭水', '夏季丰水期瀑布'],
      },
    ],
    hotel: {
      name: '嘉荫江畔民宿',
      address: '嘉荫县城临江路一带',
    },
  },
  {
    day: 7,
    date: '2026-07-04',
    weekday: '周六',
    location: '嘉荫 → 汤旺河',
    hero: '/images/destinations/tangwanghe-stone-forest.jpg',
    oneLine: '闯入伊春绿野仙踪——汤旺河林海奇石，原始森林与花岗岩石林。',
    transport: [
      {
        type: 'car',
        summary: '18 座中巴包车',
        details: '嘉荫前往汤旺河用车',
      },
    ],
    attractions: [
      {
        name: '汤旺河林海奇石风景区',
        type: 'paid',
        duration: '3-5 小时',
        address: '伊春市汤旺河区旅游公路以北 9 公里处',
        description:
          '原始森林 + 奇形怪状的花岗岩石林，空气里都是草木清香，天然大氧吧名不虚传。参天红松遮天蔽日，路边形态各异的奇石——有的像神兽、有的像古堡。全程木栈道好走，温度比城市低好几度。',
        highlights: ['原始森林', '花岗岩石林', '天然大氧吧', '木栈道轻松徒步', '夏季避暑胜地'],
      },
    ],
    hotel: {
      name: '汤旺河当地酒店',
      address: '伊春市汤旺河区',
    },
  },
  {
    day: 8,
    date: '2026-07-05',
    weekday: '周日',
    location: '新青湿地 + 五营森林',
    hero: '/images/destinations/wuying-pine-forest.jpg',
    oneLine: '在中国白头鹤之乡听鸟鸣，于五营红松王国与不怕生的松鼠相遇。',
    transport: [
      {
        type: 'car',
        summary: '18 座中巴包车',
        details: '新青湿地至五营森林公园用车',
      },
    ],
    attractions: [
      {
        name: '新青国家湿地公园',
        type: 'paid',
        duration: '3-5 小时',
        address: '伊春市丰林县伊嘉公路 96.5 公里处',
        description:
          '"中国白头鹤之乡"。全球珍稀的白头鹤每年春天都准时飞回这片湿地筑巢。东方白鹳、白枕鹤、苍鹭、鸳鸯等几十种候鸟都把这儿当"长途驿站"。森林 + 草甸 + 泥炭沼泽原生态，木栈道安静观鸟。',
        highlights: ['中国白头鹤之乡', '几十种候鸟驿站', '原生态湿地', '木栈道观鸟'],
      },
      {
        name: '五营红松林海景区',
        type: 'paid',
        duration: '约 3 小时',
        address: '黑龙江省伊春市丰林县五营镇旅游公路',
        description:
          '探索伊春五营国家森林公园的秘境——响水溪与松鼠乐园。高大挺拔的红松历经沧桑却依旧生机勃勃，溪水清澈见底。活泼可爱的小松鼠在枝头嬉戏，完全不怕生人，是真正的天然氧吧。',
        highlights: ['红松王国', '响水溪漫步', '松鼠乐园互动', '天然氧吧'],
      },
    ],
    hotel: {
      name: '伊春市区酒店',
      address: '伊春市伊美区',
    },
  },
  {
    day: 9,
    date: '2026-07-06',
    weekday: '周一',
    location: '九峰山养心谷',
    hero: '/images/destinations/jiufeng-mountain.jpg',
    oneLine: '在现实版世外桃源里被治愈——梦幻花海、云雾山谷、趣味动物园。',
    transport: [
      {
        type: 'car',
        summary: '18 座中巴包车',
        details: '伊春至九峰山养心谷用车',
      },
    ],
    attractions: [
      {
        name: '九峰山养心谷旅游度假区',
        type: 'paid',
        duration: '3-5 小时',
        address: '伊春市金林区鹤嫩公路 68 公里处',
        description:
          '伊春挖到的现实版世外桃源，刚走进去整个人瞬间松弛下来。梦幻花海铺天盖地，雨后云雾山谷如水墨画。趣味动物园可与大孔雀、小鹿、黑熊、鸵鸟互动。园区超大，建议租电瓶车。',
        highlights: ['梦幻花海', '云雾山谷', '趣味动物园', '租电瓶车游园'],
      },
    ],
    restaurants: [
      {
        name: '一九六八民间菜馆',
        address: '伊美区通河路',
        priceRange: '人均 55 元',
        signature: ['小鸡炖榛蘑', '酸菜白肉血肠', '铁锅炖鱼'],
        description:
          '伊春当地风味餐厅榜 No.1，开馆数十年，本地人家庭聚餐首选。传统东北农家风格，包间宽敞，支持自带酒水。',
      },
      {
        name: '烀羊肉主题餐厅',
        address: '乌翠区中心路',
        priceRange: '人均 58 元',
        signature: ['铁锅烀羊肉', '酸菜锅', '冻豆腐'],
        description:
          '伊春当地风味榜 No.2，选自本地黑山羊，不加调料白煮，蘸韭菜花吃，原汁原味。提供免费自助蘸料台（18 种调料）和水果区。',
      },
    ],
    hotel: {
      name: '伊春市区酒店',
      address: '伊春市伊美区',
    },
  },
  {
    day: 10,
    date: '2026-07-07',
    weekday: '周二',
    location: '瑞枫山舍 + 金山鹿苑 + 竹筏漂流',
    hero: '/images/destinations/jinshan-deer-park.jpg',
    oneLine: '在东北小奈良喂小鹿、白桦林徒步、金山屯竹筏漂流。',
    transport: [
      {
        type: 'car',
        summary: '18 座中巴包车',
        details: '伊春至金山屯往返用车',
      },
    ],
    attractions: [
      {
        name: '瑞枫山舍山水乐园',
        type: 'paid',
        address: '伊春市金林区',
        description:
          '集东北民俗体验与户外活动于一体的山水乐园。',
        highlights: ['东北民俗大马车', '四驱越野', '骑马', '白桦林徒步', '花海', '羊驼互动', '网红秋千'],
      },
      {
        name: '金山鹿苑',
        type: 'paid',
        duration: '1-3 小时',
        address: '黑龙江省伊春市金林区金山屯镇',
        description:
          '半开放式鹿场，三面环山，溪流穿行，拥有大片草坪、森林和草甸，占地 56 公顷。散养数百头梅花鹿、天山马鹿，与野生鹿群共处，被誉为"东北小奈良"。鹿群温顺胆小，可喂食玉米粒或切条的胡萝卜/黄瓜。',
        highlights: ['东北小奈良', '散养梅花鹿', '童话森林景观', '与小鹿互动', '四季皆美'],
      },
      {
        name: '金山屯竹筏漂流',
        type: 'paid',
        duration: '约 40 分钟',
        address: '金山屯',
        description:
          '金山屯特色水上项目，开放时间 08:00-17:00。团队需两个竹筏，沿江漂流约 40 分钟，欣赏两岸原始森林风光。',
        highlights: ['约 40 分钟漂流', '团队两个竹筏', '两岸森林风光'],
      },
    ],
    hotel: {
      name: '伊春市区酒店',
      address: '伊春市伊美区',
    },
  },
  {
    day: 11,
    date: '2026-07-08',
    weekday: '周三',
    location: '伊春 → 黑河',
    hero: '/images/destinations/heihe-river-cruise.jpg',
    oneLine: '南下前往中俄边境重镇黑河，乘游船近距离眺望布拉戈维申斯克。',
    carHours: '约 6-7 小时',
    transport: [
      {
        type: 'car',
        summary: '18 座中巴包车',
        details: '伊春南下黑河用车',
      },
      {
        type: 'boat',
        summary: '黑龙江游船',
        details: '主码头：黑河市爱辉区王肃街与迎恩路交叉口下江口水文塔旁 · 沿黑龙江航行至俄罗斯海关附近返航',
      },
    ],
    attractions: [
      {
        name: '黑龙江游船（黑河游船码头）',
        type: 'paid',
        duration: '1-2 小时',
        address: '黑龙江省黑河市爱辉区王肃街与迎恩路交叉口下江口水文塔旁',
        description:
          '从码头出发，沿黑龙江航行至俄罗斯海关附近返航，沿途可观赏布拉戈维申斯克市的阿穆尔州电视塔、列宁广场、海军炮艇等标志性建筑。一江观两国。',
        highlights: ['一江观两国', '阿穆尔州电视塔', '列宁广场', '海军炮艇'],
      },
    ],
    restaurants: [
      {
        name: '翠花铁锅炖',
        address: '爱辉区中央东大街',
        priceRange: '人均 70 元',
        signature: ['铁锅炖江鱼', '小鸡炖榛蘑'],
        description:
          '采用传统柴火灶炖煮，锅边贴满金黄玉米饼，服务员现场操作揭锅，仪式感拉满。距大黑河岛仅 10 分钟车程。',
      },
      {
        name: '东北杀猪菜总店',
        address: '爱辉区环城南路',
        priceRange: '人均 60 元',
        signature: ['杀猪菜', '锅包肉'],
        description:
          '黑河杀猪菜界的"老大哥"，开业 20 年口碑爆棚。建议提前预订，晚餐高峰期需排队 1-2 小时。',
      },
    ],
    hotel: {
      name: '季枫国际酒店（黑河中央商业步行街店）',
      address: '南大街 64 号 · 中央商业步行街商圈',
      image: '/images/hotels/hotel-jifeng-heihe.jpg',
    },
  },
  {
    day: 12,
    date: '2026-07-09',
    weekday: '周四',
    location: '黑河（历史人文）',
    hero: '/images/destinations/aihui-museum.jpg',
    oneLine: '走进瑷珲历史陈列馆与知青博物馆，触摸黑龙江的近代百年风云。',
    transport: [
      {
        type: 'car',
        summary: '18 座中巴包车',
        details: '黑河市区至瑷珲镇往返用车',
      },
    ],
    attractions: [
      {
        name: '瑷珲历史陈列馆（马占山历史陈列馆分馆）',
        type: 'free',
        duration: '1-2 小时',
        address: '黑河市瑷珲区王肃街 9 号黑龙江公园',
        description:
          '聚焦马占山将军的抗日事迹，通过历史文物、图片资料等展现其在江桥抗战等历史事件中的贡献，是了解黑龙江抗战史的重要场所。开放时间 4 月 21 日-12 月 31 日 周二至周日 09:00-15:30，周一闭馆。',
        highlights: ['江桥抗战历史', '马占山将军事迹', '黑龙江抗战史', '免费参观'],
      },
      {
        name: '知青博物馆',
        type: 'paid',
        duration: '2-3 小时',
        address: '黑龙江省黑河市爱辉区瑷珲镇 311 省道',
        description:
          '全国唯一一座以知青为主题的博物馆，通过大量文物、照片和场景还原，展现 20 世纪六七十年代知青在黑河屯垦戍边的历史。5 月 1 日-9 月 30 日 周二至周日 09:00-16:00，周一闭馆。',
        highlights: ['全国唯一知青主题', '屯垦戍边历史', '场景还原', '六七十年代文物'],
      },
    ],
    hotel: {
      name: '季枫国际酒店（黑河中央商业步行街店）',
      address: '南大街 64 号 · 中央商业步行街商圈',
      image: '/images/hotels/hotel-jifeng-heihe.jpg',
    },
  },
  {
    day: 13,
    date: '2026-07-10',
    weekday: '周五',
    location: '黑河 → 哈尔滨 → 启程',
    hero: '/images/destinations/harbin-saint-sophia.jpg',
    oneLine: '行程收官，返回哈尔滨自由活动或继续前往俄罗斯，结束 13 天深度之旅。',
    transport: [
      {
        type: 'car',
        summary: '黑河至哈尔滨交通',
        details: '飞机或包车返回哈尔滨，按需安排后续行程',
      },
    ],
    attractions: [
      {
        name: '哈尔滨自由活动',
        type: 'free',
        duration: '灵活安排',
        address: '哈尔滨市',
        description:
          '可漫步中央大街、参观圣索菲亚教堂、品味道里菜市场美食。如继续前往俄罗斯，可办理出境手续。',
        highlights: ['中央大街', '圣索菲亚教堂', '俄式建筑风情'],
      },
    ],
  },
];

export interface DestinationOverview {
  slug: string;
  name: string;
  subtitle: string;
  region: string;
  hero: string;
  tagline: string;
  description: string;
  highlights: string[];
  bestSeason: string;
  days: number[];
  card: string;
}

export const destinations: DestinationOverview[] = [
  {
    slug: 'wudalianchi',
    name: '五大连池',
    subtitle: '凝固的火山教科书',
    region: '黑河市',
    hero: '/images/destinations/wudalianchi-bailong-lake.jpg',
    tagline: '世界三大冷矿泉 · 14 座火山串起的地质奇观',
    description:
      '14 座新老期火山拔地而起，5 个堰塞湖如明珠串联。在这里，可以饮世界三大冷矿泉、触摸亿年熔岩石海、登药泉山俯瞰火山群、赏白龙湖三池日落。这是凝固的火山教科书，更是自然的康养圣水。',
    highlights: ['世界地质公园', '世界三大冷矿泉', '14 座火山群', '凝固熔岩台地', '一湖两界地质奇观'],
    bestSeason: '5 月-10 月（夏秋最佳）',
    days: [1, 2, 3],
    card: '/images/destinations/wudalianchi-museum.jpg',
  },
  {
    slug: 'jiayin',
    name: '嘉荫',
    subtitle: '中俄边境的恐龙王国',
    region: '伊春市',
    hero: '/images/destinations/jiayin-dinosaur-park.jpg',
    tagline: '神州第一龙 · 一脚跨两国的边境小城',
    description:
      '在中俄边境的小兴安岭脚下，藏着一座穿越 6500 万年的白垩纪王国。神州第一龙的骨架静静伫立，黑龙江畔 223 界碑旁可眺望俄罗斯巴斯克沃村。江畔品江鱼，星空下听虫鸣，这是边境独有的浪漫。',
    highlights: ['恐龙国家地质公园', '神州第一龙', '223 中俄界碑', '黑龙江界江风光', '白垩纪王国'],
    bestSeason: '6 月-9 月',
    days: [4, 5, 6],
    card: '/images/destinations/jiayin-boundary-monument.jpg',
  },
  {
    slug: 'yichun',
    name: '伊春林都',
    subtitle: '红松故乡的天然氧吧',
    region: '伊春市',
    hero: '/images/destinations/wuying-pine-forest.jpg',
    tagline: '中国林都 · 4 万平方公里森林海洋',
    description:
      '中国林都伊春，森林覆盖率高达 84% 以上。汤旺河花岗岩石林立林海之中、五营红松王国松鼠成群、新青湿地白头鹤翩跹、金山鹿苑东北小奈良、九峰山养心谷梦幻花海——这里是被绿色治愈的城市。',
    highlights: ['汤旺河林海奇石', '五营红松王国', '新青白头鹤之乡', '金山鹿苑东北小奈良', '九峰山养心谷'],
    bestSeason: '6 月-9 月（夏季避暑）',
    days: [7, 8, 9, 10],
    card: '/images/destinations/tangwanghe-stone-forest.jpg',
  },
  {
    slug: 'heihe',
    name: '黑河',
    subtitle: '中俄界江风情重镇',
    region: '黑河市',
    hero: '/images/destinations/heihe-river-cruise.jpg',
    tagline: '一江观两国 · 百年风云的历史窗口',
    description:
      '中俄边境重镇，与俄罗斯布拉戈维申斯克隔江相望。乘游船一江观两国，登瑷珲历史陈列馆触摸近代百年风云，于全国唯一的知青博物馆重温那段峥嵘岁月。这里有最浓的边境风情，最深的家国记忆。',
    highlights: ['黑龙江游船', '一江观两国', '瑷珲历史陈列馆', '知青博物馆', '布拉戈维申斯克隔江对望'],
    bestSeason: '5 月-10 月',
    days: [11, 12],
    card: '/images/destinations/zhiqing-museum.jpg',
  },
  {
    slug: 'harbin',
    name: '哈尔滨',
    subtitle: '东方莫斯科',
    region: '哈尔滨市',
    hero: '/images/destinations/harbin-saint-sophia.jpg',
    tagline: '东方小巴黎 · 中俄文化交融之城',
    description:
      '行程的起点与终点。圣索菲亚教堂的拜占庭穹顶、中央大街的俄式石板路、铁锅炖与春饼的东北豪迈——这是行程启程与收官的最佳背景板。',
    highlights: ['圣索菲亚教堂', '中央大街', '俄式建筑群', '东北美食集萃'],
    bestSeason: '6 月-9 月（夏季） · 12 月-2 月（冰雪季）',
    days: [1, 13],
    card: '/images/destinations/harbin-ice-world.jpg',
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export interface DishEntry {
  name: string;
  area: string;
  image: string;
  priceRange?: string;
  address?: string;
  signature: string[];
  description: string;
}

export const dishes: DishEntry[] = [
  {
    name: '清蒸矿泉鱼',
    area: '五大连池',
    image: '/images/dishes/dish-kuangquan-fish.jpg',
    priceRange: '人均 80-120 元',
    address: '矿泉鱼村 · 药泉东路',
    signature: ['清蒸矿泉鱼', '铁锅炖矿泉鱼'],
    description:
      '选用五大连池自然生长的野生鲤鱼，仅用葱姜去腥，保留鱼肉本鲜，肉质紧实无土腥味。搭配豆腐、茄子、玉米饼铁锅炖煮，汤汁浓郁。',
  },
  {
    name: '火山石烤肉',
    area: '五大连池',
    image: '/images/dishes/dish-huoyanshi-steak.jpg',
    priceRange: '人均 68 元',
    address: '火山石烤肉馆 · 景区南门步行街 88 号',
    signature: ['火山石烤牛肋骨', '野生蓝莓酱'],
    description:
      '火山石自带焦香孔洞，锁住肉汁。野生蓝莓酱是解腻神器。隐藏玩法：提前 1 天预订火山石烤全羊（限量供应），羊肉带着硫磺矿物质香气。',
  },
  {
    name: '铁锅炖江鱼',
    area: '嘉荫',
    image: '/images/dishes/dish-tieguo-fish.jpg',
    signature: ['黑龙江活鱼', '柴火慢炖', '玉米饼'],
    description:
      '黑龙江里现捞的活鱼，柴火慢炖，鱼肉鲜嫩入味，汤汁泡饭或蘸着玉米饼子吃，是东北菜的灵魂。',
  },
  {
    name: '山珍野味',
    area: '嘉荫 / 伊春',
    image: '/images/dishes/dish-shanzhen.jpg',
    signature: ['刺嫩芽煎蛋', '蕨菜炒肉', '榛蘑炖小鸡'],
    description:
      '蘑菇、木耳、蕨菜、猴头菇、刺嫩芽都是山林馈赠。清爽风味，是城市里尝不到的本真滋味。',
  },
  {
    name: '小鸡炖榛蘑',
    area: '伊春',
    image: '/images/dishes/dish-dongbei-cai.jpg',
    priceRange: '人均 55 元',
    address: '一九六八民间菜馆 · 伊美区通河路',
    signature: ['小鸡炖榛蘑', '酸菜白肉血肠', '铁锅炖鱼'],
    description:
      '伊春当地风味餐厅榜 No.1。散养笨鸡搭配小兴安岭榛蘑，汤汁浓郁。传统东北农家风格，包间宽敞。',
  },
  {
    name: '黑河铁锅炖江鱼',
    area: '黑河',
    image: '/images/dishes/dish-jiangyu-jiayin.jpg',
    priceRange: '人均 70 元',
    address: '翠花铁锅炖 · 爱辉区中央东大街',
    signature: ['铁锅炖黑龙江鲤鱼', '小鸡炖榛蘑'],
    description:
      '采用传统柴火灶炖煮，锅边贴满金黄玉米饼，服务员现场操作揭锅，仪式感拉满。距大黑河岛仅 10 分钟车程。',
  },
  {
    name: '老昌春饼',
    area: '哈尔滨',
    image: '/images/dishes/dish-chunbing.jpg',
    signature: ['东北春饼', '筋饼', '酱炒菜'],
    description:
      '哈尔滨经典东北菜代表。分店多、品控稳定。雪龙筋饼也是好吃便宜的小店之选。Day 1 哈尔滨午餐推荐。',
  },
];

export interface TipSection {
  icon: 'car' | 'bag' | 'shield' | 'leaf' | 'clock' | 'phone';
  title: string;
  subtitle: string;
  points: string[];
}

export const travelTips: TipSection[] = [
  {
    icon: 'car',
    title: '包车出行',
    subtitle: '18 座中巴 · 10 人 8 件行李',
    points: [
      '全程 8 小时用车时长，超时按当地标准计费',
      '可根据兴趣和时间自由定制行程，灵活调整',
      '专业司机熟悉路线，提供导航和景点讲解',
      '避免拥挤的公共交通，私密性与舒适度兼备',
      '直达景点，免换乘，节省精力与时间',
    ],
  },
  {
    icon: 'bag',
    title: '行李准备',
    subtitle: '夏季东北 · 早晚温差大',
    points: [
      '7 月黑龙江白天 25-30℃，早晚 15-20℃，建议带薄外套',
      '伊春林区温度比城市低 5-8℃，备长袖冲锋衣',
      '黑河中俄边境紫外线强，备防晒霜、墨镜、帽子',
      '五大连池、伊春多湿地森林，备驱蚊液、徒步鞋',
      '相机、充电宝、身份证（边境检查） 必备',
    ],
  },
  {
    icon: 'shield',
    title: '安全提示',
    subtitle: '边境 + 户外双场景',
    points: [
      '黑河、嘉荫为中俄边境，223 界碑等区域禁止跨越国境线',
      '游船、漂流、湿地栈道注意脚下，听从工作人员指挥',
      '火山熔岩台地、石寨区域勿偏离栈道，岩石锋利易伤',
      '与金山鹿苑、五营松鼠等野生动物互动时勿强行投喂或抚摸',
      '保管好身份证件，边境检查站配合查验',
    ],
  },
  {
    icon: 'leaf',
    title: '生态礼仪',
    subtitle: '守护火山与森林',
    points: [
      '五大连池矿泉为稀缺资源，自备瓶接水，不浪费',
      '红松林、湿地、火山遗址严禁烟火、采摘、刻画',
      '与白头鹤、松鼠等野生动物保持距离，不打扰不投喂人工食物',
      '嘉荫恐龙化石区、瑷珲博物馆内禁止使用闪光灯',
      '自驾/包车不乱扔垃圾，所有垃圾带离景区',
    ],
  },
  {
    icon: 'clock',
    title: '开放时间',
    subtitle: '重要场馆时间提示',
    points: [
      '瑷珲历史陈列馆：周二至周日 09:00-15:30（周一闭馆）',
      '知青博物馆：5 月-9 月 09:00-16:00；10 月-次年 4 月 09:00-15:30（周一闭馆）',
      '金山屯竹筏漂流：08:00-17:00（约 40 分钟/次）',
      '黑龙江游船：日间开放，建议日落前 1 小时登船',
      '法定节假日场馆正常开放，时间以 09:00-15:30 为准',
    ],
  },
  {
    icon: 'phone',
    title: '联络与应急',
    subtitle: '关键联系方式',
    points: [
      '包车司机与导游为全程第一联系人，紧急情况优先联系',
      '景区救援/投诉：12301 全国旅游服务热线',
      '医疗急救：120；报警：110',
      '黑河边境相关问题：可咨询酒店前台或当地派出所',
      '建议购买包含边境游、户外活动的旅行意外险',
    ],
  },
];

export interface PackageInfo {
  label: string;
  value: string;
}

export const packageInfo: PackageInfo[] = [
  { label: '行程天数', value: '13 天 12 晚' },
  { label: '出行日期', value: '2026.06.28 - 07.10' },
  { label: '团队规模', value: '10 人精品小团' },
  { label: '交通工具', value: '18 座中巴包车 · 含 1 段内陆航班' },
  { label: '住宿标准', value: '商务酒店 / 江畔民宿' },
  { label: '用餐安排', value: '地方特色餐厅 · 含江鱼宴、矿泉鱼' },
  { label: '行程覆盖', value: '哈尔滨 · 五大连池 · 嘉荫 · 伊春 · 黑河' },
  { label: '特色体验', value: '恐龙化石 · 中俄界碑 · 林海奇石 · 鹿苑互动' },
];

export const tripStats = [
  { value: '13', unit: '天', label: '深度行程' },
  { value: '5', unit: '城', label: '黑吉蒙腹地' },
  { value: '20+', unit: '处', label: '精选目的地' },
  { value: '14', unit: '座', label: '火山地质奇观' },
];
