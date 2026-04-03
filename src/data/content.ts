export type Language = 'bn' | 'en';

export const content = {
  bn: {
    nav: {
      title: "তুলসী.পাতা.বাংলা",
      about: "পরিচিতি",
      types: "প্রকারভেদ",
      nutrition: "পুষ্টিগুণ",
      benefits: "উপকারিতা",
      uses: "ব্যবহারবিধি",
      culture: "ইতিহাস",
      cultivation: "চাষাবাদ",
      precautions: "সতর্কতা"
    },
    hero: {
      title: "তুলসী: প্রকৃতির এক মহৌষধ",
      subtitle: "আমাদের সংস্কৃতি, স্বাস্থ্য আর আধ্যাত্মিকতার সাথে গভীরভাবে জড়িত এক পবিত্র উদ্ভিদ। চলুন জেনে নিই এর এ টু জেড (A to Z) বিস্তারিত তথ্য।"
    },
    about: {
      title: "তুলসী কী?",
      text: "তুলসী (Holy Basil) একটি সুগন্ধি ভেষজ উদ্ভিদ, যার বৈজ্ঞানিক নাম Ocimum tenuiflorum (বা Ocimum sanctum)। এটি Lamiaceae (পুদিনা) পরিবারের অন্তর্গত। এটি মূলত দক্ষিণ এশিয়ায় (বিশেষ করে ভারত ও বাংলাদেশে) খুব পরিচিত এবং হাজার হাজার বছর ধরে আয়ুর্বেদ চিকিৎসায় ব্যবহৃত হয়ে আসছে। এর পাতা, কাণ্ড, ফুল, বীজ এবং শিকড়—সবকিছুরই ঔষধি গুণ রয়েছে।"
    },
    types: {
      title: "তুলসীর ধরন",
      items: [
        { id: 'rama', name: "রাম তুলসী (Rama Tulsi)", desc: "এর পাতা হালকা সবুজ রঙের হয় এবং এর স্বাদ তুলনামূলক মৃদু ও মিষ্টি। এটি সাধারণত সব জায়গাতেই দেখা যায় এবং এর সুগন্ধ খুব স্নিগ্ধ।" },
        { id: 'krishna', name: "কৃষ্ণ তুলসী (Shyam Tulsi)", desc: "এর পাতা গাঢ় সবুজ বা বেগুনি রঙের হয় এবং কাণ্ডও কালচে হয়। এর স্বাদ বেশ ঝাঁঝালো। ঔষধি গুণাগুণের দিক থেকে এটি সবচেয়ে বেশি শক্তিশালী বলে বিবেচিত।" },
        { id: 'vana', name: "বন তুলসী (Vana Tulsi)", desc: "এটি সাধারণত বন্য পরিবেশে জন্মায়। এর পাতা একটু বড় হয় এবং লেবুর মতো তীব্র সুগন্ধ থাকে। এটি রোগ প্রতিরোধ ক্ষমতা বাড়াতে খুব কার্যকর।" },
        { id: 'kapoor', name: "কাপুর তুলসী (Kapoor Tulsi)", desc: "এর সুগন্ধ অনেকটা কর্পূরের মতো। এটি মূলত মশা ও পোকামাকড় তাড়াতে বেশি ব্যবহৃত হয় এবং খুব দ্রুত বৃদ্ধি পায়।" }
      ]
    },
    nutrition: {
      title: "তুলসীর বৈজ্ঞানিক পুষ্টিগুণ",
      subtitle: "তুলসীতে রয়েছে শক্তিশালী সব ফাইটোকেমিক্যালস, ভিটামিন ও খনিজ উপাদান:",
      items: [
        "ভিটামিন: ভিটামিন এ (চোখের জন্য), ভিটামিন সি (ইমিউনিটি), এবং ভিটামিন কে (হাড় ও রক্ত জমাট বাঁধতে)।",
        "খনিজ উপাদান: ক্যালসিয়াম, ম্যাগনেসিয়াম, ফসফরাস, আয়রন এবং পটাশিয়াম।",
        "ইউজেনল (Eugenol): এটি একটি শক্তিশালী পেইনকিলার এবং অ্যান্টিসেপটিক।",
        "রোজমেরিনিক এসিড (Rosmarinic acid): শক্তিশালী অ্যান্টিঅক্সিডেন্ট যা কোষের ক্ষয় রোধ করে।",
        "লিনালুল ও কারভাক্রল (Linalool & Carvacrol): স্ট্রেস কমাতে এবং ব্যাকটেরিয়ার বিরুদ্ধে লড়তে সাহায্য করে।",
        "আরসোলিক এসিড (Ursolic acid): প্রদাহনাশক এবং ক্যান্সার প্রতিরোধী গুণসম্পন্ন।"
      ]
    },
    benefits: {
      title: "বিস্তারিত স্বাস্থ্য উপকারিতা",
      subtitle: "তুলসীকে 'প্রাকৃতিক ঔষধ' বলা হয়। মাথা থেকে পা পর্যন্ত এর উপকারিতা বিস্তৃত:",
      items: [
        { id: 'cold', title: "শ্বাসতন্ত্রের সমস্যা ও কাশি", desc: "তুলসীতে থাকা ক্যাম্পেন (Camphene), ইউজেনল (Eugenol) এবং সিনিওল (Cineole) ফুসফুসের সংক্রমণ কমায়। আয়ুর্বেদ অনুযায়ী, তুলসী পাতা, আদা ও মধুর মিশ্রণ সর্দি-কাশি, ব্রঙ্কাইটিস এবং হাঁপানির (Asthma) জন্য জাদুর মতো কাজ করে। এটি প্রাকৃতিকভাবে কফ বের করে দিতে (Expectorant) সাহায্য করে।", reference: "তথ্যসূত্র: Journal of Ayurveda and Integrative Medicine" },
        { id: 'immunity', title: "রোগ প্রতিরোধ ক্ষমতা", desc: "গবেষণায় দেখা গেছে, নিয়মিত তুলসী খেলে রক্তে টি-হেল্পার সেল (T-helper cells) এবং ন্যাচারাল কিলার সেল (NK cells) বৃদ্ধি পায়। এর অ্যান্টিব্যাকটেরিয়াল এবং অ্যান্টিভাইরাল উপাদান শরীরকে বিভিন্ন সংক্রমণ থেকে রক্ষা করে।", reference: "তথ্যসূত্র: Journal of Ethnopharmacology (2011)" },
        { id: 'heart', title: "হৃদযন্ত্রের সুরক্ষা", desc: "তুলসীতে থাকা শক্তিশালী অ্যান্টিঅক্সিডেন্ট (যেমন ইউজেনল) এবং ভিটামিন সি হার্টকে ফ্রি-র‍্যাডিকেলের ক্ষতি থেকে বাঁচায়। গবেষণায় প্রমাণিত যে, এটি রক্তে ক্ষতিকর কোলেস্টেরল (LDL) কমায় এবং রক্তচাপ নিয়ন্ত্রণে সাহায্য করে, যা হৃদরোগের ঝুঁকি কমায়।", reference: "তথ্যসূত্র: Journal of Clinical Pharmacy and Therapeutics" },
        { id: 'kidney', title: "কিডনির পাথর দূর করতে", desc: "তুলসী পাতার রস একটি প্রাকৃতিক মূত্রবর্ধক (Diuretic)। এটি কিডনির কার্যকারিতা বাড়ায় এবং রক্তে ইউরিক এসিডের মাত্রা কমায়। ঐতিহ্যগতভাবে, তুলসীর রসের সাথে মধু মিশিয়ে খেলে তা কিডনির পাথর ভাঙতে এবং তা মূত্রের মাধ্যমে বের করে দিতে সাহায্য করে।", reference: "তথ্যসূত্র: International Journal of Green Pharmacy" },
        { id: 'oral', title: "দাঁত ও মুখের স্বাস্থ্য", desc: "তুলসীর অ্যান্টিব্যাকটেরিয়াল উপাদান মুখের ক্ষতিকর ব্যাকটেরিয়া ধ্বংস করে। বৈজ্ঞানিক গবেষণায় দেখা গেছে, তুলসীর নির্যাস মাড়ির রোগ (Periodontitis), মুখের দুর্গন্ধ এবং মুখের আলসার সারাতে অত্যন্ত কার্যকর। এটি দাঁতের প্লাক জমাও রোধ করে।", reference: "তথ্যসূত্র: Journal of Indian Society of Periodontology" },
        { id: 'digestion', title: "হজমে সাহায্য ও লিভার সুরক্ষা", desc: "তুলসী পাকস্থলীর মিউকাস মেমব্রেনকে শক্তিশালী করে, যা পেপটিক আলসার প্রতিরোধ করে। এটি হজমকারী এনজাইম নিঃসরণ বাড়ায় এবং লিভারের এনজাইমগুলোকে উদ্দীপিত করে শরীরকে ডিটক্সিফাই (বিষমুক্ত) করতে সাহায্য করে।", reference: "তথ্যসূত্র: Journal of Ayurveda and Integrative Medicine" },
        { id: 'skin', title: "ত্বক ও চুলের যত্ন", desc: "রক্ত পরিষ্কার করার প্রাকৃতিক ক্ষমতার কারণে তুলসী ব্রণ ও ফুসকুড়ি কমায়। এর অ্যান্টিফাঙ্গাল উপাদান দাদ বা চুলকানির মতো চর্মরোগে কার্যকর। ঐতিহ্যগতভাবে, তুলসীর পেস্ট মাথায় লাগালে খুশকি দূর হয় এবং চুলের গোড়া শক্ত হয়।", reference: "তথ্যসূত্র: Pharmacognosy Reviews" },
        { id: 'stress', title: "স্ট্রেস ও মানসিক চাপ", desc: "তুলসী একটি প্রমাণিত 'অ্যাডাপ্টোজেন' (Adaptogen)। বৈজ্ঞানিক গবেষণায় দেখা গেছে, এটি শরীরে কর্টিসল (স্ট্রেস হরমোন) এর মাত্রা নিয়ন্ত্রণ করে। এটি স্নায়ুকে শান্ত করে, মানসিক চাপ, উদ্বেগ (Anxiety) এবং বিষণ্ণতা (Depression) কমাতে সাহায্য করে।", reference: "তথ্যসূত্র: Journal of Ayurveda and Integrative Medicine (2014)" },
        { id: 'diabetes', title: "ডায়াবেটিস নিয়ন্ত্রণ", desc: "ক্লিনিক্যাল ট্রায়ালে দেখা গেছে, তুলসী অগ্ন্যাশয়ের (Pancreas) বিটা সেলগুলোর কার্যকারিতা বাড়ায়, যা ইনসুলিন নিঃসরণে সাহায্য করে। এটি রক্তে শর্করার মাত্রা (Fasting blood sugar) উল্লেখযোগ্যভাবে কমাতে সক্ষম।", reference: "তথ্যসূত্র: Phytomedicine (1996)" }
      ]
    },
    uses: {
      title: "তুলসী ব্যবহারের বিভিন্ন উপায়",
      items: [
        { id: 'chew', title: "সরাসরি খাওয়া", desc: "প্রতিদিন সকালে খালি পেটে ৪-৫টি তাজা, ধোয়া পাতা এক গ্লাস পানি দিয়ে গিলে খাওয়া সবচেয়ে উপকারী। (চিবিয়ে খেলে দাঁতের এনামেলের ক্ষতি হতে পারে)।" },
        { id: 'tea', title: "তুলসী চা বা ক্বাথ", desc: "২ কাপ পানিতে ১০-১২টি তাজা তুলসী পাতা, আদা, গোলমরিচ ও লবঙ্গ দিয়ে ফুটান। ৫-১০ মিনিট অল্প আঁচে জ্বাল দিন যতক্ষণ না পানি অর্ধেক হয়। ছেঁকে মধু মিশিয়ে পান করুন। সর্দি-জ্বরে এটি দারুণ উপকারী।" },
        { id: 'juice', title: "তুলসীর রস", desc: "এক মুঠো তাজা পাতা সামান্য পানি দিয়ে বেটে বা ব্লেন্ড করে পরিষ্কার কাপড়ে চিপে রস বের করুন। কাশির জন্য প্রতিদিন ১-২ চা চামচ রস মধুর সাথে মিশিয়ে দিনে দুবার খাওয়া যেতে পারে।" },
        { id: 'steam', title: "বাষ্প নেওয়া (Steam)", desc: "একটি পাত্রে পানি ফুটিয়ে তাতে ১০-১৫টি তুলসী পাতা দিন। চুলা বন্ধ করে মাথার ওপর তোয়ালে দিয়ে ঢেকে ৫-১০ মিনিট গভীরভাবে ভাপ নিন। এটি বন্ধ নাক ও সাইনাসের ব্যথা দূর করে।" },
        { id: 'paste', title: "পেস্ট বা প্রলেপ", desc: "তাজা তুলসী পাতার সাথে কয়েক ফোঁটা পানি বা গোলাপজল মিশিয়ে মিহি ও ঘন পেস্ট তৈরি করুন। চর্মরোগ, ব্রণের ওপর লাগিয়ে ১৫-২০ মিনিট পর ধুয়ে ফেলুন।" },
        { id: 'powder', title: "তুলসীর গুঁড়ো (চূর্ণ)", desc: "শুকনো তুলসী পাতার গুঁড়ো বায়ুরোধী পাত্রে সংরক্ষণ করুন। প্রতিদিন আধা চা চামচ গুঁড়ো হালকা গরম পানি বা চায়ের সাথে মিশিয়ে খেলে রোগ প্রতিরোধ ক্ষমতা বাড়ে।" }
      ]
    },
    culture: {
      title: "ইতিহাস ও সাংস্কৃতিক গুরুত্ব",
      items: [
        { title: "ধর্মীয় গুরুত্ব (হিন্দু ধর্ম)", desc: "হিন্দু ধর্মে তুলসী অত্যন্ত পবিত্র গাছ। একে 'লক্ষ্মীর অবতার' মনে করা হয়। প্রায় প্রতিটি বাড়িতেই তুলসী মঞ্চ থাকে এবং প্রতিদিন এর পূজা করা হয়। এটি 'পবিত্রতা' ও 'সুস্বাস্থ্য'-এর প্রতীক।" },
        { title: "আয়ুর্বেদিক ইতিহাস", desc: "ভারতীয় উপমহাদেশে ৫০০০ বছরেরও বেশি সময় ধরে এটি ব্যবহৃত হচ্ছে। চরক সংহিতা ও সুশ্রুত সংহিতার মতো প্রাচীন আয়ুর্বেদ গ্রন্থে তুলসীকে 'জীবনদায়ী ভেষজ' বা 'প্রকৃতির ঔষধ' বলা হয়েছে।" },
        { title: "বৈশ্বিক ইতিহাস", desc: "প্রাচীন গ্রিক ও রোমান সভ্যতায় বেসিল (Basil) পরিবারকে রাজকীয় ও পবিত্র মনে করা হতো। 'Basil' শব্দটি এসেছে গ্রিক শব্দ 'Basileus' থেকে, যার অর্থ রাজা।" }
      ]
    },
    cultivation: {
      title: "তুলসী চাষ ও পরিচর্যা",
      cards: [
        {
          title: "টব ও মাটি প্রস্তুতি",
          icon: "sprout",
          items: [
            "টবের আকার: কমপক্ষে ১০-১২ ইঞ্চি গভীর এবং চওড়া টব নির্বাচন করুন, যার নিচে পানি নিষ্কাশনের ছিদ্র আছে।",
            "মাটির মিশ্রণ: ৫০% দোআঁশ মাটি, ৩০% কোকো পিট বা বালি এবং ২০% জৈব সার (ভার্মি কম্পোস্ট) মিশিয়ে মাটি তৈরি করুন।",
            "বপন: বীজগুলো মাটির ওপর ছড়িয়ে হালকা মাটি দিয়ে ঢেকে দিন। চারা বড় হলে একটি টবে ১-২টি গাছ রাখুন।"
          ]
        },
        {
          title: "নিয়মিত পরিচর্যা",
          icon: "sun",
          items: [
            "আলো: প্রতিদিন অন্তত ৬-৮ ঘণ্টা সরাসরি সূর্যের আলো প্রয়োজন। রোদযুক্ত বারান্দা বা জানালার পাশে রাখুন।",
            "পানি: মাটির ওপরের অংশ শুকিয়ে গেলে তবেই পানি দিন। অতিরিক্ত পানি দিলে শিকড় পচে যেতে পারে।",
            "ছাঁটাই (Pruning): গাছকে ঝোপালো করতে নিয়মিত ডগার ফুল (মঞ্জুরি) কেটে দিন। এতে নতুন পাতা বেশি আসে।"
          ]
        },
        {
          title: "ঋতুভিত্তিক যত্ন",
          icon: "cloud",
          items: [
            "শীতকাল: অতিরিক্ত ঠান্ডায় তুলসী গাছ মারা যেতে পারে। শীতে গাছটি ঘরের ভেতরে বা কুয়াশা থেকে দূরে রাখুন এবং পানি কম দিন।",
            "বর্ষাকাল: বৃষ্টির পানি যেন টবে জমে না থাকে সেদিকে খেয়াল রাখুন। ফাঙ্গাস এড়াতে নিম তেল স্প্রে করতে পারেন।"
          ]
        }
      ]
    },
    research: {
      title: "আধুনিক বিজ্ঞান ও গবেষণা",
      desc: "আধুনিক ফার্মাকোলজিক্যাল গবেষণায় তুলসীর বহুমুখী গুণাগুণ প্রমাণিত হয়েছে:",
      items: [
        "অ্যান্টিব্যাকটেরিয়াল ও অ্যান্টিভাইরাল: ই-কোলাই, স্ট্যাফাইলোকক্কাস এবং বিভিন্ন ভাইরাসের বিরুদ্ধে কার্যকর।",
        "রেডিওপ্রোটেকটিভ (Radioprotective): বিকিরণ বা রেডিয়েশনের ক্ষতিকর প্রভাব থেকে কোষকে রক্ষা করে।",
        "অ্যান্টি-কার্সিনোজেনিক (Anti-carcinogenic): এর ফাইটোকেমিক্যালস ক্যান্সার কোষের বৃদ্ধি রোধ করতে সাহায্য করে।",
        "নিউরোপ্রোটেকটিভ (Neuroprotective): মস্তিষ্কের কোষের ক্ষয় রোধ করে এবং স্মৃতিশক্তি বাড়ায়।"
      ]
    },
    precautions: {
      title: "পার্শ্বপ্রতিক্রিয়া ও সতর্কতা",
      desc: "তুলসী অত্যন্ত উপকারী হলেও কিছু ক্ষেত্রে সতর্কতা মেনে চলা জরুরি:",
      items: [
        { title: "দাঁতের এনামেল ক্ষয়", desc: "তুলসী পাতায় সামান্য পরিমাণে পারদ (Mercury) ও আয়রন থাকে। তাই পাতা বেশি চিবিয়ে খেলে দাঁতের এনামেল নষ্ট হতে পারে। পাতা গিলে খাওয়া বা চা হিসেবে পান করা সবচেয়ে নিরাপদ।" },
        { title: "রক্তচাপ ও সুগার কমে যাওয়া", desc: "অতিরিক্ত খেলে রক্তচাপ এবং রক্তে শর্করার মাত্রা (Hypoglycemia) অতিরিক্ত কমে যেতে পারে। যাদের লো-ব্লাড প্রেশার আছে তাদের সতর্ক থাকা উচিত।" },
        { title: "রক্ত পাতলা করা", desc: "এটি প্রাকৃতিকভাবে রক্ত পাতলা করে। তাই সার্জারির ২ সপ্তাহ আগে থেকে বা ব্লাড থিনার ওষুধের সাথে এটি খাওয়া উচিত নয়।" },
        { title: "গর্ভবতী নারী", desc: "অতিরিক্ত তুলসী খেলে জরায়ুর সংকোচন হতে পারে, তাই গর্ভবতী নারীদের চিকিৎসকের পরামর্শ ছাড়া বেশি খাওয়া উচিত নয়।" },
        { title: "প্রজনন ক্ষমতা", desc: "কিছু প্রাণী গবেষণায় দেখা গেছে, অতিরিক্ত তুলসী সেবন পুরুষদের শুক্রাণুর সংখ্যা (Sperm count) সাময়িকভাবে কমাতে পারে।" }
      ]
    },
    footer: {
      disclaimer: "এই ওয়েবসাইট শুধুমাত্র তথ্যের জন্য। যেকোনো ভেষজ নিয়মিত ওষুধ হিসেবে ব্যবহারের আগে অবশ্যই একজন বিশেষজ্ঞ চিকিৎসক বা আয়ুর্বেদিকের পরামর্শ নিন।"
    }
  },
  en: {
    nav: {
      title: "Tulsi.Pata.Bangla",
      about: "About",
      types: "Types",
      nutrition: "Nutrition",
      benefits: "Benefits",
      uses: "Uses",
      culture: "History",
      cultivation: "Cultivation",
      precautions: "Precautions"
    },
    hero: {
      title: "Tulsi: Nature's Ultimate Medicine",
      subtitle: "Deeply connected to our culture, health, and spirituality. Let's explore the A to Z details of this sacred plant."
    },
    about: {
      title: "What is Tulsi?",
      text: "Tulsi (Holy Basil) is an aromatic medicinal plant, scientifically known as Ocimum tenuiflorum (or Ocimum sanctum). It belongs to the Lamiaceae (mint) family. Native to South Asia (especially India and Bangladesh), it has been a cornerstone of Ayurvedic medicine for thousands of years. Every part of the plant—leaves, stem, flowers, seeds, and roots—holds immense medicinal value."
    },
    types: {
      title: "Types of Tulsi",
      items: [
        { id: 'rama', name: "Rama Tulsi", desc: "Features light green leaves with a mild, sweet taste and a cooling, mellow fragrance. It is the most commonly found variety." },
        { id: 'krishna', name: "Krishna Tulsi (Shyam Tulsi)", desc: "Characterized by dark green or purple leaves and a dark stem. It has a peppery, crisp taste and is considered the most potent in terms of medicinal properties." },
        { id: 'vana', name: "Vana Tulsi", desc: "A wild variety with slightly larger leaves and a strong lemony aroma. It is highly effective in boosting immunity." },
        { id: 'kapoor', name: "Kapoor Tulsi", desc: "Has a strong camphor-like scent. It grows very quickly and is widely used as a natural mosquito and insect repellent." }
      ]
    },
    nutrition: {
      title: "Scientific Nutritional Profile",
      subtitle: "Tulsi is packed with powerful phytochemicals, vitamins, and minerals:",
      items: [
        "Vitamins: Vitamin A (for eyes), Vitamin C (immunity), and Vitamin K (bone health and blood clotting).",
        "Minerals: Calcium, Magnesium, Phosphorus, Iron, and Potassium.",
        "Eugenol: A powerful bioactive compound acting as a natural painkiller and antiseptic.",
        "Rosmarinic acid: A potent antioxidant that prevents cellular damage.",
        "Linalool & Carvacrol: Compounds that help reduce stress and fight bacterial infections.",
        "Ursolic acid: Known for its strong anti-inflammatory and potential anti-cancer properties."
      ]
    },
    benefits: {
      title: "Comprehensive Health Benefits",
      subtitle: "Often called 'The Queen of Herbs', its benefits span from head to toe:",
      items: [
        { id: 'cold', title: "Respiratory Health", desc: "Compounds like Camphene, Eugenol, and Cineole in Tulsi relieve lung congestion. According to Ayurveda, a decoction of Tulsi, ginger, and honey works wonders for colds, bronchitis, and asthma. It acts as a natural expectorant, helping to expel phlegm.", reference: "Source: Journal of Ayurveda and Integrative Medicine" },
        { id: 'immunity', title: "Immunity Booster", desc: "Scientific studies show that regular consumption of Tulsi increases T-helper cells and Natural Killer (NK) cells in the blood. Its broad-spectrum antibacterial, antiviral, and antifungal properties fortify the body against various infections.", reference: "Source: Journal of Ethnopharmacology (2011)" },
        { id: 'heart', title: "Heart Health", desc: "Powerful antioxidants like Eugenol and Vitamin C protect the heart from free radical damage. Research indicates that Tulsi helps lower harmful cholesterol (LDL) levels and regulates blood pressure, significantly reducing the risk of cardiovascular diseases.", reference: "Source: Journal of Clinical Pharmacy and Therapeutics" },
        { id: 'kidney', title: "Kidney Stones", desc: "Tulsi acts as a mild, natural diuretic. It enhances kidney function and reduces uric acid levels in the blood. Traditionally, consuming Tulsi juice with honey for several months is believed to help dissolve kidney stones and flush them out.", reference: "Source: International Journal of Green Pharmacy" },
        { id: 'oral', title: "Oral & Dental Health", desc: "The antibacterial properties of Tulsi destroy harmful oral bacteria. Scientific research has proven its efficacy in treating gum disease (periodontitis), bad breath, and mouth ulcers. It also helps prevent the buildup of dental plaque.", reference: "Source: Journal of Indian Society of Periodontology" },
        { id: 'digestion', title: "Digestion & Liver Protection", desc: "Tulsi strengthens the stomach's mucous membrane, helping to prevent peptic ulcers. It stimulates the secretion of digestive enzymes and boosts liver function, acting as a potent hepatoprotective agent that detoxifies the body.", reference: "Source: Journal of Ayurveda and Integrative Medicine" },
        { id: 'skin', title: "Skin & Hair Care", desc: "Due to its blood-purifying properties, Tulsi effectively reduces acne and blemishes. Its antifungal nature treats skin infections like ringworm. Traditionally, applying Tulsi paste to the scalp eliminates dandruff and strengthens hair follicles.", reference: "Source: Pharmacognosy Reviews" },
        { id: 'stress', title: "Stress & Anxiety Relief", desc: "Tulsi is a scientifically recognized 'adaptogen'. Studies show it regulates cortisol (the stress hormone) levels in the body. It calms the central nervous system, significantly reducing psychological stress, anxiety, and symptoms of depression.", reference: "Source: Journal of Ayurveda and Integrative Medicine (2014)" },
        { id: 'diabetes', title: "Diabetes Management", desc: "Clinical trials have demonstrated that Tulsi enhances the function of pancreatic beta cells, aiding in insulin secretion. It has been proven to significantly lower fasting blood sugar levels and improve lipid profiles in diabetic patients.", reference: "Source: Phytomedicine (1996)" }
      ]
    },
    uses: {
      title: "Various Ways to Use Tulsi",
      items: [
        { id: 'chew', title: "Direct Consumption", desc: "Swallowing 4-5 fresh, washed leaves with a glass of water on an empty stomach is highly beneficial. (Chewing is not recommended due to enamel risk)." },
        { id: 'tea', title: "Tulsi Tea (Kadha)", desc: "Boil 10-12 fresh Tulsi leaves in 2 cups of water. Add crushed ginger, black pepper, and cloves. Simmer for 5-10 minutes until the water reduces to half. Strain and add honey. Ideal for fevers and colds." },
        { id: 'juice', title: "Fresh Juice", desc: "Crush a handful of fresh leaves using a mortar and pestle with a few drops of water. Squeeze through a clean cloth to extract the juice. Recommended dosage: 1-2 teaspoons mixed with honey, twice a day for coughs." },
        { id: 'steam', title: "Steam Inhalation", desc: "Boil a pot of water and add 10-15 fresh Tulsi leaves. Turn off the heat, lean over the pot with a towel draped over your head, and inhale deeply for 5-10 minutes. Clears blocked sinuses and relieves headaches." },
        { id: 'paste', title: "Paste / Poultice", desc: "Grind fresh Tulsi leaves with a few drops of water or rose water to form a smooth, thick paste. Apply directly to skin infections, insect bites, or acne. Leave it on for 15-20 minutes before washing off." },
        { id: 'powder', title: "Tulsi Powder (Churna)", desc: "Dried Tulsi leaf powder can be stored in an airtight container. Consume 1/2 teaspoon with warm water or add it to teas daily for overall wellness." }
      ]
    },
    culture: {
      title: "History & Cultural Significance",
      items: [
        { title: "Religious Importance (Hinduism)", desc: "In Hinduism, Tulsi is considered the earthly manifestation of the goddess Lakshmi. A Tulsi plant is kept in the courtyard of almost every Hindu household and worshipped daily as a symbol of purity and health." },
        { title: "Ayurvedic Heritage", desc: "It has been used in the Indian subcontinent for over 5,000 years. Ancient Ayurvedic texts like the Charaka Samhita describe it as the 'Elixir of Life'." },
        { title: "Global History", desc: "In ancient Greek and Roman civilizations, the basil family was considered royal and sacred. The word 'Basil' is derived from the Greek word 'Basileus', meaning king." }
      ]
    },
    cultivation: {
      title: "Habitat & Cultivation",
      cards: [
        {
          title: "Potting & Soil",
          icon: "sprout",
          items: [
            "Pot Size: Choose a pot that is at least 10-12 inches deep and wide, with good drainage holes at the bottom.",
            "Soil Mixture: Prepare a well-draining mix using 50% loamy soil, 30% coco peat or sand, and 20% organic compost.",
            "Planting: Sprinkle seeds on the surface and cover lightly. Thin out to 1-2 plants per pot once they grow."
          ]
        },
        {
          title: "Daily Maintenance",
          icon: "sun",
          items: [
            "Sunlight: Tulsi thrives in full sun. Ensure it receives at least 6-8 hours of direct sunlight daily.",
            "Watering: Water only when the top inch of soil feels dry. Overwatering is the most common cause of root rot.",
            "Pruning: Pinch off the flowers regularly to encourage bushy growth and prevent the plant from going to seed."
          ]
        },
        {
          title: "Seasonal Care Tips",
          icon: "cloud",
          items: [
            "Winter: Tulsi is highly sensitive to frost. Move potted plants indoors or protect them from cold drafts. Reduce watering.",
            "Monsoon: Ensure pots don't become waterlogged during heavy rains. Spray diluted neem oil to prevent fungal infections."
          ]
        }
      ]
    },
    research: {
      title: "Modern Science & Research",
      desc: "Modern pharmacological studies have validated Tulsi's multifaceted properties:",
      items: [
        "Antibacterial & Antiviral: Proven effective against E. coli, Staphylococcus, and various viral strains.",
        "Radioprotective: Protects living cells from the harmful effects of radiation.",
        "Anti-carcinogenic: Phytochemicals in Tulsi restrict the growth of cancerous cells and induce apoptosis.",
        "Neuroprotective: Protects brain cells from damage and enhances memory and cognitive functions."
      ]
    },
    precautions: {
      title: "Side Effects & Precautions",
      desc: "While highly beneficial, certain precautions must be observed:",
      items: [
        { title: "Tooth Enamel Damage", desc: "Tulsi leaves contain trace amounts of mercury and iron. Chewing them regularly can stain or damage tooth enamel. It is safer to swallow them with water or drink as tea." },
        { title: "Hypoglycemia & Low BP", desc: "Overconsumption can cause a drastic drop in blood sugar levels and blood pressure. Those with already low levels should be cautious." },
        { title: "Blood Thinning", desc: "Tulsi naturally thins the blood. It should be avoided 2 weeks prior to any surgery or if taking blood-thinning medications." },
        { title: "Pregnancy", desc: "High doses may stimulate uterine contractions. Pregnant women should consult a doctor before consuming medicinal amounts." },
        { title: "Fertility Impact", desc: "Some animal studies suggest that excessive consumption of Tulsi may temporarily reduce sperm count in males." }
      ]
    },
    footer: {
      disclaimer: "This website is for informational purposes only. Always consult a qualified healthcare provider or Ayurvedic practitioner before using any herb as a regular treatment."
    }
  }
};
