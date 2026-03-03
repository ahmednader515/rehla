export interface Place {
  slug: string;
  nameAr: string;
  nameEn: string;
  shortDescAr: string;
  shortDescEn: string;
  fullDescAr: string;
  fullDescEn: string;
  images: string[];
  mapsUrl: string;
}

export const places: Place[] = [
  {
    slug: "ahad-rafidah",
    nameAr: "محافظة أحد رفيدة",
    nameEn: "Ahad Rafidah Governorate",
    shortDescAr:
      "إحدى محافظات منطقة عسير، جنوب غربي المملكة العربية السعودية، تقع على ارتفاع 2000 متر فوق سطح البحر بمناخ معتدل وطبيعة خلابة.",
    shortDescEn:
      "One of the governorates of the Asir region in southwestern Saudi Arabia, situated at 2,000 meters above sea level with a moderate climate and stunning natural scenery.",
    fullDescAr: `محافظة أحد رفيدة، هي إحدى محافظات منطقة عسير، جنوب غربي المملكة العربية السعودية، وتُعدُّ خامس محافظة من حيث عدد السكان بعسير، إذ يعيش بها 107,894 نسمة، حسب "تعداد السعودية 2022"، وتُصنَّف إداريًا ضمن محافظات الفئة (ب).

موقع محافظة أحد رفيدة
تقع محافظة أحد رفيدة جنوب منطقة عسير، على بعد 40 كلم من مدينة أبها مقر إمارة المنطقة، تحدها من الشمال محافظة خميس مشيط، ومن الغرب والجنوب الغربي مدينة أبها، ومن الشرق والجنوب الشرقي محافظة سراة عبيدة.

مراكز محافظة أحد رفيدة
يتبع لمحافظة أحد رفيدة ثلاثة مراكز، هي: الواديين، وشعف جارمة، والفرعين. وهي من المناطق التاريخية، وتُعدُّ أقرب المدن إلى الموقع التاريخي جرش، وتقع على مسافة 25 كلم من مدينة خميس مشيط، في مرتفعات جبلية يصل ارتفاعها إلى 2000 متر فوق سطح البحر، ذات مناخ معتدل وطبيعة جذابة بمناظرها الجميلة.`,
    fullDescEn: `Ahad Rafidah Governorate is one of the governorates of the Asir region in southwestern Saudi Arabia. It is the fifth most populous governorate in Asir, with 107,894 inhabitants, according to the 2022 Saudi Census. Administratively, it is classified as a Category B governorate.

Location of Ahad Rafidah Governorate
Ahad Rafidah Governorate is located in the southern part of the Asir region, 40 kilometers from Abha, the regional capital. It is bordered to the north by Khamis Mushait Governorate, to the west and southwest by Abha, and to the east and southeast by Sarat Abidah Governorate.

Centers of Ahad Rafidah Governorate
Ahad Rafidah Governorate comprises three centers: Al-Wadiain, Shaaf Jarmah, and Al-Fara'in. It is a historical area and the closest town to the historical site of Jarash. It is located 25 kilometers from Khamis Mushait, in mountainous areas reaching an altitude of 2,000 meters above sea level, with a moderate climate and attractive natural scenery.`,
    images: ["/images/Ahad-Rafidah.png"],
    mapsUrl:
      "https://www.google.com/maps/place/5R9P%2BWJH+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A3%D8%AD%D8%AF+%D8%B1%D9%81%D9%8A%D8%AF%D8%A9",
  },
  {
    slug: "shaaf-lajwan-museum",
    nameAr: "متحف شعف لجوان",
    nameEn: "Shaaf Lajwan Site",
    shortDescAr:
      "متحف قبيلة لجوان التراثي الذي يضم أكثر من 10,000 قطعة أثرية يعود بعضها إلى عام 1305هـ، افتُتح بحضور أمير منطقة عسير.",
    shortDescEn:
      "The Lajwan Tribe Heritage Museum housing over 10,000 artifacts dating back to 1305 AH, inaugurated by the Governor of Asir Region.",
    fullDescAr: `افتتح سمو أمير منطقة عسير رئيس هيئة تطويرها الأمير تركي بن طلال بن عبد العزيز آل سعود متحف قبيلة لجوان التراثي، بتاريخ ١٤٤٦/١٠/٢٤ هـ والذي يقع في جنوب شرق المحافظة على مسافة 25 كيلاً، في مركز شعف جارمة وذلك بحضور أدباء وأعيان وأهالي ومحافظي المنطقة.

يضم المتحف الذي يقع في موقع مميز، ويطل على شعف لجوان، أكثر من 10000 قطعة أثرية، ويعود عمر بعضها إلى عام 1305هـ، كما يحتوي على معرض الإبل ومعرض الخيل الذي يضم جوائز على مستوى المملكة تحصل عليها رجل الأعمال هيف بن محمد بن عبود الرفيدي.

يضم المتحف العديد من السيارات الكلاسيكية التراثية ومجلس تراثي يعبر عن أصالة الهوية التراثية، كما يحتوي شعف لجوان على سوق الأربعاء القديم والعديد من القرى التراثية القريبة من موقع المتحف، والذي يعكس ثقافة وتراث البيوت الأثرية القديمة في المنطقة.`,
    fullDescEn: `His Royal Highness Prince Turki bin Talal bin Abdulaziz Al Saud, Governor of the Asir Region and Chairman of its Development Authority, inaugurated the Lajwan Tribe Heritage Museum on 24/10/1446 AH. The museum is located 25 kilometers southeast of the governorate, in the Shaaf Jarmah center. The inauguration was attended by writers, dignitaries, residents, and governors of the region.

Situated in a prime location overlooking Shaaf Lajwan, the museum houses more than 10,000 artifacts, some dating back to 1305 AH. It also includes a camel exhibit and a horse exhibit featuring national awards won by businessman Haif bin Mohammed bin Aboud Al-Rufaidi.

The museum also features several classic heritage cars and a traditional majlis (gathering place) that reflects the authenticity of the heritage identity. Shaaf Lajwan also contains several heritage villages near the museum site, which reflect the culture and heritage of the ancient archaeological houses in the region.`,
    images: [
      "/images/Shaaf-Lajwan-Museum-1.png",
      "/images/Shaaf-Lajwan-Museum-2.png",
      "/images/Shaaf-Lajwan-Museum-3.png",
      "/images/Shaaf-Lajwan-Museum-4.png",
      "/images/Shaaf-Lajwan-Museum-5.png",
      "/images/Shaaf-Lajwan-Museum-6.png",
      "/images/Shaaf-Lajwan-Museum-7.png",
      "/images/Shaaf-Lajwan-Museum-8.png",
      "/images/Shaaf-Lajwan-Museum-9.png",
      "/images/Shaaf-Lajwan-Museum-10.png",
      "/images/Shaaf-Lajwan-Museum-11.png",
      "/images/Shaaf-Lajwan-Museum-12.png",
    ],
    mapsUrl:
      "https://www.google.com/maps/place/Palace+Joan+celebrations,+AGSA4898,+4898+%D9%88%D8%A7%D8%AF%D9%89+%D8%B2%D9%8A%D8%AF+10,+6411,+%D8%A2%D9%84+%D8%AF%D9%84%D9%87%D9%85+62275/@18.054975,42.9538646,16z",
  },
  {
    slug: "mount-hammouma",
    nameAr: "نقوش جبل حمومة",
    nameEn: "Mount Hammouma Inscriptions",
    shortDescAr:
      "جبل يبلغ ارتفاعه 80 متراً، يحتوي على نقوش أثرية قديمة وكهف عسل عمره ثلاثة آلاف سنة، ويُعدّ حاجزاً طبيعياً ومركزاً للمراقبة.",
    shortDescEn:
      "An 80-meter-high mountain containing ancient rock inscriptions and a cave with 3,000-year-old honey, once a natural barrier and watchtower for Jarash.",
    fullDescAr: `يعد جبل حمومة أحد أشهر المعالم الطبيعية القريبة من جرش، ويبعد عنها قرابة كيلومتر واحد فقط باتجاه الشرق، ويبلغ ارتفاعه (80 م) عن سطح الأرض.

كان جزءاً لا يتجزأ من تاريخ جُرَش، لكونه حاجزاً طبيعياً، ومركزاً للمراقبة والحراسة، فضلاً عن احتوائه على العديد من الشواهد الأثرية التي يعود بعضها إلى عصور ما قبل الميلاد.

كما تم العثور فيه على كهف يحتوي على عسل قديم تم تقدير عمره بما يقارب ثلاثة آلاف سنة، بالإضافة إلى نقوش أثرية قديمة على صخور الجبل تعكس العمق التاريخي لمدينة جرش الأثرية.

عُثر في جبل حمومة على عدد من الكتابات الصخرية، بالإضافة إلى أساسات لمبنى يحتوي على ثلاثة غرف، تنتشر حوله اللقى الفخارية، والقطع المزججة. ورجّح الآثاريون بأن المبنى كان معبداً، حيث عثر على بقايا مواد سائلة كالعسل والسمن قبل الإسلام.`,
    fullDescEn: `Mount Hammouma is one of the most famous natural landmarks near Jerash, located about one kilometer east of it. It is 80 meters high above the ground and was an integral part of Jerash's history, as it was a natural barrier and a center for observation and guarding.

It also contains many archaeological evidence, some of which date back to pre-Christian times. A cave containing ancient honey, estimated to be about three thousand years old, was also found there, in addition to ancient archaeological inscriptions on the mountain's rocks that reflect the historical depth of the ancient city of Jerash.

On Mount Hamumah, several rock inscriptions were found, along with the foundations of a building with three rooms. The area around it was littered with pottery fragments and glazed pieces. Archaeologists believe that the building was a temple, as remnants of liquid materials such as honey and clarified butter were discovered, dating back to pre-Islamic times.`,
    images: [
      "/images/Mount-Hammouma-1.png",
      "/images/Mount-Hammouma-2.png",
      "/images/Mount-Hammouma-3.png",
    ],
    mapsUrl:
      "https://www.google.com/maps/place/Hamomah+Mount,+3997+8760,+Saudi+Arabia",
  },
  {
    slug: "ancient-city-of-jarash",
    nameAr: "مدينة جرش الأثرية",
    nameEn: "Jarash Archaeological Site",
    shortDescAr:
      "مدينة أثرية تاريخية تقع في محافظة أحد رفيدة، كانت محطةً رئيسية على طريق التجارة القديم وملتقى القوافل بين جنوب الجزيرة العربية وشمالها.",
    shortDescEn:
      "A historic archaeological city in Ahad Rafidah, once a key station on ancient trade routes and a meeting point for caravans connecting southern and northern Arabia.",
    fullDescAr: `تقع مدينة جرش الأثرية في محافظة أحد رفيدة في منطقة عسير. وتعد جرش نقطة التقاء القوافل، وحلقة وصل جنوب الجزيرة العربية بغربها وشمالها مما جعلها محطة رئيسة على طريق التجارة القديم الذي يمر بنجران ثم جرش.

ومن جرش تخترق القوافل جبال السروات باتجاه الشمال حتى تصل إلى الطائف ثم مكة المكرمة ثم المدينة المنورة ثم تعبر المراكز التجارية شمال الجزيرة العربية كدادان (العلا) والحجر.

كانت بداية شهرة جرش في التاريخ الإسلامي سنة (9هـ) عندما وفد صرد بن عبد الله الأزدي رضي الله عنه على النبي صلى الله عليه وسلم، وأسلم، وولاه الرسول صلى الله عليه وسلم على جُرَش، وأمره بمجاهدة أهل الشرك.

كان بعض أهل مكة المكرمة والطائف وغيرهما من حواضر الجزيرة العربية يذهبون إلى بلاد جرش ليتعلموا بعض الصناعات الحربية. وقد لاحظ الآثاريون على موقع جرش الأثري أنه يتشابه في أسلوب بنائه مع موقع الأخدود الأثري بنجران، وأن اللقى الأثرية التي عثر عليها تشابه ما عُثر عليه في الأخدود، خصوصاً المصنوعات الفخارية ذات النمط السميك الخشن ذي اللون الأحمر المزخرف.`,
    fullDescEn: `The ancient city of Jarash is located in the Ahad Rafidah Governorate of the Asir Region. Jorash served as a crucial junction where Hijazi caravans met with Yemeni caravans, linking southern Arabia with its western and northern regions. This strategic position made Jorash a key station on the ancient trade route that passed through Najran and then Jorash.

From Jorash, caravans would traverse the Sarawaat Mountains northward, reaching Ta'if, then Makkah, and continuing to Madeenah. From there, the route passed through major trading centres in northern Arabia, such as Dadaan (Al-'Ulaa) and Al-Hijr.

Jorash first gained prominence in Islamic history in the year 9 AH (630 CE) when Surad ibn Abdullah Al-Azdee, may Allah be pleased with him, visited Prophet Muhammad, peace be upon him, embraced Islam, and was appointed by the Prophet as the governor of Jorash.

Archaeologists have noted that the construction style of the Jorash archaeological site closely resembles that of the Al-Ukhdood site in Najran. The earliest description of the archaeological site of Jorash was provided by the traveller John Philby, who visited it in 1936. He observed an ancient fortress built from granite stones, with its foundations set upon the ruins of abandoned buildings.`,
    images: [
      "/images/The-ancient-city-of-Jarash-1.png",
      "/images/The-ancient-city-of-Jarash-2.png",
      "/images/The-ancient-city-of-Jarash-3.png",
      "/images/The-ancient-city-of-Jarash-4.png",
    ],
    mapsUrl:
      "https://www.google.com/maps/place/%D9%85%D9%88%D9%82%D8%B9+%D8%AC%D8%B1%D8%B4+%D8%A7%D9%84%D8%A3%D8%AB%D8%B1%D9%8A%D8%8C+2650+%D8%AC%D8%B1%D8%B4+%D8%A7%D9%84%D8%A7%D8%AB%D8%B1%D9%8A+2%D8%8C+%D8%AD%D9%8A+%D8%AC%D8%B1%D8%B4+%D8%A7%D9%84%D8%A7%D8%AB%D8%B1%D9%8A%D8%8C+AKDA8795%D8%8C+8795%D8%8C+%D8%A3%D8%AD%D8%AF+%D8%B1%D9%81%D9%8A%D8%AF%D8%A9+62421/@18.2040554,42.8224795,15z",
  },
  {
    slug: "house-of-culture",
    nameAr: "بيت الثقافة - أحد رفيدة",
    nameEn: "House of Culture - Ahad Rafidah",
    shortDescAr:
      "مكتبة عامة حديثة تمتد على مساحة 3,256 متراً مربعاً من دورين، تقدم خدمات ثقافية وتعليمية وورش عمل لجميع الفئات العمرية.",
    shortDescEn:
      "A modern public library spanning 3,256 square meters across two floors, offering cultural and educational services, workshops, and programs for all age groups.",
    fullDescAr: `المكتبة العامة بأحد رفيدة والتي مساحتها 3,256 متر مربع وتتكون من دورين وتقدم خدماتها بمفهومها الحديث بيتاً ثقافياً، والذي من شأنه أن يساهم في تحقيق مستهدفات هيئة المكتبات من خلال تنمية قطاع المكتبات العامة في المملكة العربية السعودية.

تعمل المكتبة على تحسين إتاحة الوصول للخدمات المقدمة في هذا الشأن، وتعزيز المشاركة المجتمعية وتنمية القدرات، ورفع مستوى الوعي المعلوماتي وتعزيز العادات القرائية.

كما يحتوي على مكتبة تناسب جميع الفئات العمرية، ويوجد أيضاً مسرح للأطفال ومسرح عام، كما يستفيد الزوار من ورش العمل والأنشطة والبرامج والفعاليات وتعدد في مجالات متعددة منها الأدب والمهارات الحياتية والخدمات العامة والفنون البصرية والأدائية والأعمال والتقنية ومواضيع أخرى تربط العقل بالثقافة والمعرفة.`,
    fullDescEn: `The public library in Ahad Rafidah, spanning 3,256 square meters and comprising two floors, offers its services according to the modern concept of a cultural center. This contributes to achieving the goals of the Saudi Library Authority by developing the public library sector in the Kingdom of Saudi Arabia.

The library works on improving access to related services, enhancing community participation and capacity building, raising information awareness, and promoting reading habits.

The library includes facilities suitable for all age groups, a children's theater, and a public theater. Visitors benefit from workshops, activities, programs, and events covering diverse fields such as literature, life skills, public services, visual and performing arts, as well as works, technology, and other topics that connect the mind with culture and knowledge.`,
    images: [
      "/images/House-of-Culture-Ahad Rafidah-1.png",
      "/images/House-of-Culture-Ahad-Rafidah-2.png",
      "/images/House-of-Culture-Ahad-Rafidah-3.png",
      "/images/House-of-Culture-Ahad-Rafidah-4.png",
    ],
    mapsUrl:
      "https://www.google.com/maps/place/%D8%A8%D9%8A%D8%AA+%D8%A7%D9%84%D8%AB%D9%82%D8%A7%D9%81%D8%A9+-+%D9%85%D9%83%D8%AA%D8%A8%D8%A9+%D8%A3%D8%AD%D8%AF+%D8%B1%D9%81%D9%8A%D8%AF%D8%A9+%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9",
  },
  {
    slug: "al-haif-heritage-palaces",
    nameAr: "قصور آل هيف التراثية",
    nameEn: "Al-Haif Heritage Palaces",
    shortDescAr:
      "قرية أثرية عمرها يتجاوز 350 عاماً، تضم قصر قحطان الشهير بأكثر من خمسة طوابق، محاطة بحصن دفاعي يرتفع أكثر من أربعة أمتار.",
    shortDescEn:
      "An archaeological village over 350 years old featuring the famous Qahtan Palace of more than five floors, surrounded by a defensive fortress over four meters high.",
    fullDescAr: `تُعد قرية آل هيف من أقدم القرى الأثرية في منطقة عسير حيث يتجاوز عمرها 350 عامًا وتمثل نموذجًا مميزًا للعمارة التراثية في جنوب المملكة وتعكس أسلوب الحياة الاجتماعية والقبلية في تلك الحقبة. وكانت القرية مقرًا لإمارة محلية في ذلك الوقت مما أضفى عليها أهمية سياسية وإدارية إلى جانب دورها الاجتماعي.

وتتميز القرية بوجود عدد من القصور التاريخية ويُعد أبرزها (قصر قحطان) الذي يتكون من أكثر من خمسة طوابق ويحيط به عدد من القصور الأخرى ذات الطابع المعماري القديم. كما تضم القرية مبنى الضيافة المعروف باسم «القشلة» والذي كان مخصصًا لاستقبال الضيوف وعابري السبيل إضافة إلى كونه مقرًا لعقد الاجتماعات وحل النزاعات القبلية.

وتقع جميع مباني القرية داخل حصن دفاعي يبلغ ارتفاعه أكثر من أربعة أمتار وتنتشر في زواياه عدد من القصابات المخصصة للحراسة والمراقبة، فيما يُعرف مدخل الحصن ببوابة كبيرة تُسمى «باب الحيط»، والتي تُعد من أبرز معالم القرية التاريخية.

وقد خضعت قرية آل هيف الأثرية مؤخرًا لأعمال ترميم شاملة ومن المقرر بإذن الله افتتاحها لاستقبال الزوار قريبًا لتكون وجهة سياحية وتراثية.`,
    fullDescEn: `The village of Al-Haif is one of the oldest archaeological villages in the Asir region, dating back over 350 years. It represents a distinctive example of traditional architecture in southern Saudi Arabia and reflects the social and tribal lifestyle of that era. The village served as headquarters for a local emirate at that time, which gave it political and administrative importance in addition to its social role.

It boasts a number of historical palaces, the most prominent of which is the Qahtan Palace, comprised of more than five floors and surrounded by other palaces with traditional architecture. It also houses the hospitality establishment known as "Al-Qashla," which was used to receive guests and travelers, as well as serving as a meeting place and a hub for resolving tribal affairs.

All the village's buildings are located within a defensive fortress over four meters high. A number of watchtowers are stationed around the perimeter, and the fortress entrance is marked by a large gate called "Bab Al-Hayt," a prominent historical landmark.

The Al-Haif archaeological village has recently undergone comprehensive restoration works and is scheduled to open to visitors as a tourist and heritage destination highlighting tribal and historical culture.`,
    images: [
      "/images/The-village-of-Al-Haif-1.png",
      "/images/The-village-of-Al-Haif-2.png",
      "/images/The-village-of-Al-Haif-3.png",
    ],
    mapsUrl:
      "https://www.google.com/maps/place/%D9%82%D8%B5%D9%88%D8%B1+%D8%A2%D9%84+%D9%87%D9%8A%D9%81+%D8%A7%D9%84%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%D9%8A%D8%A9",
  },
  {
    slug: "al-sheikh-heritage-village",
    nameAr: "قرية آل الشيخ التراثية",
    nameEn: "Al Sheikh Heritage Village",
    shortDescAr:
      "قرية تأسست عام 1136هـ بتاريخ يمتد لـ3000 سنة، تضم أبراج الحراسة وأكثر من 74 بئراً مطوية بالحجر وبيوتاً طينية عمرها 1500 سنة.",
    shortDescEn:
      "A village founded in 1136 AH with a history spanning 3,000 years, featuring watchtowers, over 74 stone-lined wells, and mud-brick houses 1,500 years old.",
    fullDescAr: `تم تأسيسها عام ١١٣٦ قبل أكثر من ٣٠٠ سنة، تقع قرية آل الشيخ جنوب محافظة أحد رفيدة في منطقة عسير، ويبلغ عدد سكانها قرابة ١٣٥٠ شخصاً، وترجع حضارتها إلى قرابة ٣٠٠٠ سنة، يوجد بها بعض البيوت التي تُبنى من الطين ولها ١٥٠٠ سنة متأرثة.

يوجد بها أبراج الحراسة المسماة القصيب وتُستخدم للحراسة والحرب، يوجد مجموعة كبيرة من المدافن التي تُستخدم لتخزين الحبوب لأن القرية غنية بالمزارع والآبار حيث يوجد بها أكثر من ٧٤ بئراً مطوية بالحجر.

تقع في مركز شعف جارمة بجوار متحف شعف لجوان التراثي، وتُعد القرية معلماً تراثياً بارزاً في المحافظة تعكس البعد التاريخي والثقافي للمنطقة.`,
    fullDescEn: `Established in 1136 AH (over 300 years ago), Al Sheikh Village is located south of Ahad Rafidah Governorate in the Asir region. It has a population of approximately 1,350 and its history dates back nearly 3,000 years. Some of its houses are built of mud brick and are 1,500 years old.

The village features watchtowers called "Qasib," used for guard duty and warfare. There are also a large number of silos used for storing grain, as the village is rich in farms and wells. It boasts more than 74 stone-lined wells in the Shaaf Jarmah center, near the Shaaf Lajwan Heritage Museum.

The village is a prominent heritage landmark in the governorate, reflecting the historical and cultural significance of the region.`,
    images: [
      "/images/Al-Sheikh-Heritage-Village-1.png",
      "/images/Al-Sheikh-Heritage-Village-2.png",
      "/images/Al-Sheikh-Heritage-Village-3.png",
      "/images/Al-Sheikh-Heritage-Village-4.png",
    ],
    mapsUrl:
      "https://www.google.com/maps/place/%D9%82%D8%B5%D9%88%D8%B1+%D8%A7%D9%84%D8%B4%D9%8A%D8%AE+%D8%AD%D8%B3%D9%8A%D9%86+%D8%A8%D9%86+%D8%B5%D9%85%D8%A7%D9%86+%D8%A7%D9%84%D8%B1%D9%81%D9%8A%D8%AF%D9%8A",
  },
  {
    slug: "al-alrumaih-museum",
    nameAr: "متحف آل الرميح",
    nameEn: "Al Alrumaih Museum",
    shortDescAr:
      "متحف تراثي خاص بارز في عسير يجسّد نموذجاً حياً للبيئة القديمة عبر معروضاته من الأدوات المنزلية والأسلحة والعملات والمخطوطات والأزياء الشعبية.",
    shortDescEn:
      "A prominent private heritage museum in Asir presenting a vivid model of traditional life through household tools, weapons, coins, manuscripts, and folk costumes.",
    fullDescAr: `يُعدّ متحف آل الرميح من أبرز المتاحف التراثية الخاصة في منطقة عسير، ويتميّز بطابعه المعماري التقليدي الذي يعكس هوية البناء الجنوبي القديم من حيث استخدام الحجر والأخشاب والزخارف المحلية.

يضم المتحف أقساماً متعددة تحتوي على أدوات منزلية قديمة كانت تُستخدم في الطهي وإعداد القهوة وحفظ المؤن، إضافة إلى أدوات الزراعة والرعي التي تعبّر عن طبيعة الحياة الريفية في المنطقة. كما يحتوي على مجموعة من الأسلحة التقليدية، والعملات القديمة، والوثائق التاريخية، والمخطوطات، إلى جانب الأزياء الشعبية والحُليّ.

ويحرص المتحف على إبراز العادات والتقاليد المرتبطة بالمناسبات الاجتماعية، مثل الزواج والأعياد وطقوس الضيافة. ويؤدي المتحف دوراً مهماً في حفظ الموروث الشعبي وتعزيز الهوية الوطنية، من خلال استقبال الوفود المدرسية والمهتمين بالتراث والسياح.`,
    fullDescEn: `Al Alrumaih Museum is one of the most prominent private heritage museums in the Asir Region. It is distinguished by its traditional architectural style, reflecting the identity of old southern construction through the use of stone, wood, and local decorative elements.

The museum includes several sections featuring old household tools once used for cooking, coffee preparation, and food storage, as well as agricultural and herding tools that reflect the rural lifestyle of the region. It also houses a collection of traditional weapons, old coins, historical documents, manuscripts, traditional clothing, and jewelry.

The museum highlights customs and traditions associated with social occasions such as weddings, religious festivals, and hospitality rituals. It plays an important role in preserving folk heritage and strengthening national identity by welcoming school groups, heritage enthusiasts, and tourists, providing detailed explanations of the displayed items and their historical significance.`,
    images: [
      "/images/Al-Alrumaih-Museum-1.png",
      "/images/Al-Alrumaih-Museum-2.png",
    ],
    mapsUrl:
      "https://www.google.com/maps/place/4XQV%2BXPW+%D9%82%D8%B5%D8%B1+%D8%A7%D9%84%D8%B1%D9%85%D9%8A%D8%AD+%D8%A7%D9%84%D8%AA%D8%B1%D8%A7%D8%AB%D9%8A+%D8%A8%D8%AC%D9%88%D9%81+%D8%A2%D9%84+%D8%A7%D9%84%D8%B4%D9%88%D8%A7%D8%B7",
  },
  {
    slug: "al-jumaah-market",
    nameAr: "سوق الجمعة التراثي",
    nameEn: "Al-Jum'ah Traditional Market",
    shortDescAr:
      "سوق شعبي تراثي يُقام كل جمعة في الواديين، يجمع الباعة والأهالي لتبادل السلع التقليدية كالعسل والسمن والحبوب والمشغولات اليدوية.",
    shortDescEn:
      "A heritage market held every Friday in Al-Wadayn, where vendors and residents gather to trade traditional goods including honey, ghee, grains, and handmade crafts.",
    fullDescAr: `سوق الجمعة الشعبي بالواديين هو أحد الأسواق التراثية في مركز الواديين بمحافظة أحد رفيدة، التابعة لمنطقة عسير في المملكة العربية السعودية. ويُعدّ من أبرز المظاهر الاجتماعية والاقتصادية التي تعكس هوية المجتمع المحلي وتراثه الأصيل.

يُقام السوق يوم الجمعة من كل أسبوع، حيث يجتمع فيه الباعة والأهالي من الواديين والقرى المجاورة لعرض وشراء المنتجات المحلية. ويشتهر بتوفير السلع التقليدية مثل العسل البلدي، والسمن، والحبوب، والخضروات، إضافة إلى المشغولات اليدوية والأدوات التراثية.

ولا يقتصر دور السوق على كونه مكانًا للبيع والشراء، بل يُمثّل ملتقى اجتماعياً تتجدد فيه العلاقات وتُتبادل الأخبار، في أجواء تعبّر عن روح الأصالة والتكافل بين أفراد المجتمع.`,
    fullDescEn: `Al-Jum'ah Traditional Market in Al-Wadayn is a heritage market located in Al-Wadayn Center, within the Ahad Rafidah Governorate in the Asir Region, Saudi Arabia. It is considered one of the most prominent social and economic landmarks that reflect the local community's identity and long-standing traditions.

The market is held every Friday, where vendors and residents from Al-Wadayn and nearby villages gather to buy and sell local products. It is well known for offering traditional goods such as local honey, ghee, grains, fresh vegetables, handmade crafts, and heritage tools.

Beyond commerce, the market serves as a social gathering place where people reconnect, exchange news, and strengthen community ties in an atmosphere that preserves the authentic spirit of Asir's cultural heritage.`,
    images: [
      "/images/Al-Jumah-Traditional-Market-1.png",
      "/images/Al-Jumah-Traditional-Market-2.png",
      "/images/Al-Jumah-Traditional-Market-3.png",
    ],
    mapsUrl:
      "https://www.google.com/maps/place/%D8%B3%D9%88%D9%82+%D8%A7%D9%84%D8%AC%D9%85%D8%B9%D8%A9+%D8%A7%D9%84%D8%B4%D8%B9%D8%A8%D9%8A+%D8%A8%D9%85%D8%B1%D9%83%D8%B2+%D8%A7%D9%84%D9%88%D8%A7%D8%AF%D9%8A%D9%8A%D9%86",
  },
  {
    slug: "ahad-rafidah-market",
    nameAr: "موقع سوق أحد رفيدة القديم وقصور الشيخ حسين بن صمان",
    nameEn: "Old Ahad Rafidah Market and Sheikh Hussein bin Samman Palaces",
    shortDescAr:
      "سوق شعبي عريق في محافظة أحد رفيدة لا يزال قائماً بمبانيه التراثية القديمة، يجمع المنتجات الزراعية والمواشي والسلع التقليدية العسيرية.",
    shortDescEn:
      "An ancient traditional market in Ahad Rafidah still standing with its heritage buildings, gathering agricultural products, livestock, and traditional Asiri goods.",
    fullDescAr: `سوق أحد رفيدة يُعد من الأسواق الشعبية العريقة في محافظة أحد رفيدة بمنطقة عسير، ويشكّل جزءًا مهمًا من المشهد التراثي والاقتصادي في المحافظة.

عُرف السوق منذ سنوات طويلة كمكانٍ يجتمع فيه الباعة والمتسوقون في أجواء تعبّر عن بساطة الحياة وروح المجتمع المحلي. كما تميّز السوق بتنوّع معروضاته، حيث تتوفر فيه المنتجات الزراعية الطازجة، والمواشي، والمواد الغذائية الشعبية، إضافةً إلى بعض السلع التقليدية التي تعكس الطابع العسيري.

وفي قصور الشيخ حسين بن صمان الأثرية يجتمع الباعة من جميع الأنحاء حيث أن المحلات كانت تُأجر بريال واحد كل يوم أحد حيث يعود ريعها على تطوير المكان والسوق. ولازال السوق الشعبي القديم في أحد رفيدة قائماً بمبانيه التراثية القديمة التي تعكس التاريخ العريق لمنطقة عسير.`,
    fullDescEn: `The Ahad Rafidah market is one of the oldest traditional markets in the Ahad Rafidah governorate of the Asir region, and it forms an important part of the governorate's heritage and economic landscape.

For many years, the market has been known as a place where vendors and shoppers gather in an atmosphere that reflects the simplicity of life and the spirit of the local community. The market is distinguished by the diversity of its offerings, including fresh agricultural products, livestock, and traditional foodstuffs, in addition to some traditional goods that reflect the Asiri character.

In the historic palaces of Sheikh Hussein bin Samman, vendors from all over would gather, as shops were rented for one riyal every Sunday, with the proceeds going towards the development of the area and the market. The old traditional market in Ahad Rafidah still stands with its old heritage buildings that reflect the rich history of the Asir region.`,
    images: [
      "/images/The-Ahad-Rafidah-market-1.png",
      "/images/The-Ahad-Rafidah-market-2.png",
      "/images/The-Ahad-Rafidah-market-3.png",
      "/images/The-Ahad-Rafidah-market-4.png",
    ],
    mapsUrl:
      "https://www.google.com/maps/place/%D9%82%D8%B5%D9%88%D8%B1+%D8%A7%D9%84%D8%B4%D9%8A%D8%AE+%D8%AD%D8%B3%D9%8A%D9%86+%D8%A8%D9%86+%D8%B5%D9%85%D8%A7%D9%86+%D8%A7%D9%84%D8%B1%D9%81%D9%8A%D8%AF%D9%8A+%D8%B1%D8%AD%D9%85%D9%87+%D8%A7%D9%84%D9%84%D9%87%D8%8C+%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9%D8%8C+6831+%D8%AC%D9%86%D9%88%D8%A8%D8%A7+%D8%A7%D9%84%D9%89+%D8%A7%D8%AD%D8%AF+%D8%B1%D9%81%D9%8A%D8%AF%D9%87+%D9%88+%D8%B4%D9%85%D8%A7%D9%84%D8%A7+%D8%A7%D9%84%D9%89+%D8%AE%D9%85%D9%8A%D8%B3+%D9%85%D8%B4%D9%8A%D8%B7%D8%8C+3000,+Ahad+Rafidah+62421/@18.171083,42.8386142,16z",
  },
  {
    slug: "anqara-resort",
    nameAr: "منتجع قرية عنقرة السياحي",
    nameEn: "Anqara Village Resort",
    shortDescAr:
      "منتجع سياحي في محافظة أحد رفيدة بمساحة أربعين ألف متر، يضم مجالس وبنايات تراثية قديمة وأكثر من 115 غرفة وأكواخ مطلة على مزارع السمك والفراولة والبن.",
    shortDescEn:
      "A tourist resort in Ahad Rafidah spanning 40,000 square meters, featuring heritage buildings, over 115 rooms and cabins overlooking fish, strawberry and coffee farms.",
    fullDescAr: `منتجع قرية عنقرة السياحي:
يقع في محافظة أحد رفيدة بمنطقة عسير بمساحة تبلغ أربعون ألف متر ويوجد في المنتجع تنوع في المزارع، مثل المجالس التراثية القديمة، والبناية التراثية القديمة بالطين وهو ما يميز الموقع عن غيره في المنطقة، بالإضافة إلى تنوع في الجلسات الخارجية ويوجد فيه أكثر من مائة وخمسة عشر غرفة خاصة، أكواخ مطلة على مزارع السمك ومزارع الفراولة ومزارع البن بالإضافة إلى تنوع في الحياة البيئية حيث يضم الموقع ممراً مائياً للطيور وموقعاً للأسماك، وكذلك يضم المنتجع ساحة جميلة وأشجار الورد والنخيل التي يتوسطها ممر مائي، ويتميز المنتجع بجوّه الجميل والهواء العليل والضباب الذي يعكس تجربة مميزة لزوار المنتجع والسياح، بالإضافة إلى الطابع التراثي الأصيل الذي يميز الموقع ويجعله وجهة مميزة وفريدة.`,
    fullDescEn: `Anqara Village Resort:
Located in Ahad Rafidah Governorate in the Asir region, the resort spans 40,000 square meters and offers a variety of attractions, including traditional heritage majlis and historic mud-brick buildings that distinguish the site in the region. It also features diverse outdoor seating areas and over 115 private rooms, as well as cabins overlooking fish farms, strawberry farms, and coffee farms. The resort boasts rich biodiversity with a water corridor for birds and a fish site, a beautiful courtyard with rose and palm trees and a central water path. The resort is known for its pleasant climate, gentle breeze, and mist, offering a distinctive experience for visitors and tourists, along with an authentic heritage character that makes it a unique and special destination.`,
    images: [
      "/images/anqara-1.png",
      "/images/anqara-2.png",
      "/images/anqara-3.png",
      "/images/anqara-4.png",
      "/images/anqara-5.png",
      "/images/anqara-6.png",
    ],
    mapsUrl:
      "https://www.google.com/maps/place/3VGX%2B966+%D9%85%D9%86%D8%AA%D8%AC%D8%B9+%D9%82%D8%B1%D9%8A%D8%A9+%D8%B9%D9%86%D9%82%D8%B1%D8%A9%D8%8C+%D8%A7%D8%AD%D8%AF+%D8%B1%D9%81%D9%8A%D8%AF%D8%A9+(%D9%82%D8%B1%D9%8A%D8%A9%D8%8C+'Anqarah+62277/@18.0759222,42.8980111,16z",
  },
];
