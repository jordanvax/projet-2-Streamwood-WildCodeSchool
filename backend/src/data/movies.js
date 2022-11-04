const filmsData = [
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg",
    genre_ids: "Fantasy",
    id: 642885,
    original_language: "en",
    original_title: "Hocus Pocus 2",
    overview:
      "It’s been 29 years since someone lit the Black Flame Candle and resurrected the 17th-century sisters, and they are looking for revenge. Now it is up to three high-school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow’s Eve.",
    popularity: 6354.721,
    poster_path:
      "https://image.tmdb.org/t/p/w500/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
    release_date: "2022-09-27",
    title: "Hocus Pocus 2",
    video: false,
    vote_average: 7.8,
    vote_count: 554,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
    genre_ids: "Horror",
    id: 760161,
    original_language: "en",
    original_title: "Orphan: First Kill",
    overview:
      "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
    popularity: 6689.425,
    poster_path:
      "https://image.tmdb.org/t/p/w500/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
    release_date: "2022-07-27",
    title: "Orphan: First Kill",
    video: false,
    vote_average: 6.9,
    vote_count: 928,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg",
    genre_ids: "Action",
    id: 718930,
    original_language: "en",
    original_title: "Bullet Train",
    overview:
      "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
    popularity: 5396.345,
    poster_path:
      "https://image.tmdb.org/t/p/w500/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
    release_date: "2022-07-03",
    title: "Bullet Train",
    video: false,
    vote_average: 7.5,
    vote_count: 1592,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
    genre_ids: "Thriller",
    id: 985939,
    original_language: "en",
    original_title: "Fall",
    overview:
      "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
    popularity: 5456.118,
    poster_path:
      "https://image.tmdb.org/t/p/w500/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
    release_date: "2022-08-11",
    title: "Fall",
    video: false,
    vote_average: 7.4,
    vote_count: 1300,
    price: 11,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/ghsPsvM0sEztdNT4kUlTsBF2LEF.jpg",
    genre_ids: "Drama",
    id: 852046,
    original_language: "fr",
    original_title: "Athena",
    overview:
      "Hours after the tragic death of their youngest brother in unexplained circumstances, three siblings have their lives thrown into chaos.",
    popularity: 4089.775,
    poster_path:
      "https://image.tmdb.org/t/p/w500/fenNPxVF5ERy0CSyVruuEg959Hg.jpg",
    release_date: "2022-09-09",
    title: "Athena",
    video: false,
    vote_average: 6.6,
    vote_count: 223,
    price: 7,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/7AiIrnDMaOhPrw9elJ5NNjijTW4.jpg",
    genre_ids: "Thriller",
    id: 916605,
    original_language: "en",
    original_title: "The Infernal Machine",
    overview:
      "Reclusive and controversial author Bruce Cogburn is drawn out of hiding by an obsessive fan, forcing the novelist to confront a past that he thought he could escape, and to account for events set in motion by his bestseller decades earlier. Cogburn's search for who is behind the manipulation and mental torment he encounters leads to an emotional roller-coaster ride full of fear and danger, where things are not always as clear as they seem to be, and where past deeds can have dire consequences.",
    popularity: 4145.222,
    poster_path:
      "https://image.tmdb.org/t/p/w500/bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg",
    release_date: "2022-09-23",
    title: "The Infernal Machine",
    video: false,
    vote_average: 6.8,
    vote_count: 57,
    price: 11,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/rgZ3hdzgMgYgzvBfwNEVW01bpK1.jpg",
    genre_ids: "Action",
    id: 429473,
    original_language: "en",
    original_title: "Lou",
    overview:
      "A young girl is kidnapped during a powerful storm. Her mother joins forces with her mysterious neighbour to set off in pursuit of the kidnapper. Their journey will test their limits and expose the dark secrets of their past.",
    popularity: 3737.89,
    poster_path:
      "https://image.tmdb.org/t/p/w500/djM2s4wSaATn4jVB33cV05PEbV7.jpg",
    release_date: "2022-09-23",
    title: "Lou",
    video: false,
    vote_average: 6.5,
    vote_count: 223,
    price: 11,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/rwgmDkIEv8VjAsWx25ottJrFvpO.jpg",
    genre_ids: "Romance",
    id: 744276,
    original_language: "en",
    original_title: "After Ever Happy",
    overview:
      "As a shocking truth about a couple's families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met Hardin — any more than he is the cruel, moody boy she fell so hard for.",
    popularity: 2661.645,
    poster_path:
      "https://image.tmdb.org/t/p/w500/wZwxopzmqOBmS44Y2q4LUsOiFTC.jpg",
    release_date: "2022-08-24",
    title: "After Ever Happy",
    video: false,
    vote_average: 6.9,
    vote_count: 334,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg",
    genre_ids: "Fantasy",
    id: 532639,
    original_language: "en",
    original_title: "Pinocchio",
    overview:
      "A wooden puppet embarks on a thrilling adventure to become a real boy.",
    popularity: 2904.187,
    poster_path:
      "https://image.tmdb.org/t/p/w500/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg",
    release_date: "2022-09-07",
    title: "Pinocchio",
    video: false,
    vote_average: 6.7,
    vote_count: 865,
    price: 7,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/2k9tBql5GYH328Krj66tDT9LtFZ.jpg",
    genre_ids: "Adventure",
    id: 760741,
    original_language: "en",
    original_title: "Beast",
    overview:
      "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.",
    popularity: 2784.095,
    poster_path:
      "https://image.tmdb.org/t/p/w500/xIGr7UHsKf0URWmyyd5qFMAq4d8.jpg",
    release_date: "2022-08-11",
    title: "Beast",
    video: false,
    vote_average: 7.1,
    vote_count: 604,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/mVNPfpydornVe4H4UCIk7WevWjf.jpg",
    genre_ids: "Horror",
    id: 882598,
    original_language: "en",
    original_title: "Smile",
    overview:
      "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
    popularity: 2205.869,
    poster_path:
      "https://image.tmdb.org/t/p/w500/hiaeZKzwsk4y4atFhmncO5KRxeT.jpg",
    release_date: "2022-09-23",
    title: "Smile",
    video: false,
    vote_average: 6.9,
    vote_count: 154,
    price: 6,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg",
    genre_ids: "Action",
    id: 960704,
    original_language: "ja",
    original_title: "鋼の錬金術師 完結編 最後の錬成",
    overview:
      "The Elric brothers’ long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.",
    popularity: 3068.271,
    poster_path:
      "https://image.tmdb.org/t/p/w500/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg",
    release_date: "2022-06-24",
    title: "Fullmetal Alchemist: The Final Alchemy",
    video: false,
    vote_average: 6.9,
    vote_count: 36,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
    genre_ids: "Fantasy",
    id: 616037,
    original_language: "en",
    original_title: "Thor: Love and Thunder",
    overview:
      "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    popularity: 2249.741,
    poster_path:
      "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    release_date: "2022-07-06",
    title: "Thor: Love and Thunder",
    video: false,
    vote_average: 6.8,
    vote_count: 4102,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/qaTzVAW1u16WFNsepjCrilBuInc.jpg",
    genre_ids: "Animation",
    id: 539681,
    original_language: "en",
    original_title: "DC League of Super-Pets",
    overview:
      "When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.",
    popularity: 2032.937,
    poster_path:
      "https://image.tmdb.org/t/p/w500/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
    release_date: "2022-07-27",
    title: "DC League of Super-Pets",
    video: false,
    vote_average: 7.5,
    vote_count: 773,
    price: 11,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/z8KsgBFtduX5bS1yVkjoGo4L7KJ.jpg",
    genre_ids: "Drama",
    id: 597922,
    original_language: "en",
    original_title: "The Greatest Beer Run Ever",
    overview:
      "Chickie wants to support his friends fighting in Vietnam, so he does something wild—personally bring them American beer. What starts as a well-meaning journey quickly changes Chickie’s life and perspective. Based on a true story.",
    popularity: 1727.011,
    poster_path:
      "https://image.tmdb.org/t/p/w500/ggf37TpcKaxwguhvtNn6MQpyqBn.jpg",
    release_date: "2022-09-30",
    title: "The Greatest Beer Run Ever",
    video: false,
    vote_average: 7.8,
    vote_count: 161,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/aIkG2V4UXrfkxMdJZmq30xO0QQr.jpg",
    genre_ids: "Science Fiction",
    id: 791155,
    original_language: "en",
    original_title: "Secret Headquarters",
    overview:
      "While hanging out after school, Charlie and his friends discover the headquarters of the world’s most powerful superhero hidden beneath his home. When villains attack, they must team up to defend the headquarters and save the world.",
    popularity: 1724.171,
    poster_path:
      "https://image.tmdb.org/t/p/w500/8PsHogUfvjWPGdWAI5uslDhHDx7.jpg",
    release_date: "2022-08-12",
    title: "Secret Headquarters",
    video: false,
    vote_average: 7,
    vote_count: 77,
    price: 7,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg",
    genre_ids: "Thriller",
    id: 766507,
    original_language: "en",
    original_title: "Prey",
    overview:
      "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
    popularity: 2107.967,
    poster_path:
      "https://image.tmdb.org/t/p/w500/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
    release_date: "2022-08-02",
    title: "Prey",
    video: false,
    vote_average: 7.9,
    vote_count: 4243,
    price: 9,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
    genre_ids: "Animation",
    id: 438148,
    original_language: "en",
    original_title: "Minions: The Rise of Gru",
    overview:
      "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
    popularity: 1810.918,
    poster_path:
      "https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    release_date: "2022-06-29",
    title: "Minions: The Rise of Gru",
    video: false,
    vote_average: 7.6,
    vote_count: 2131,
    price: 9,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg",
    genre_ids: "Action",
    id: 629176,
    original_language: "en",
    original_title: "Samaritan",
    overview:
      "Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.",
    popularity: 1830.858,
    poster_path:
      "https://image.tmdb.org/t/p/w500/vwq5iboxYoaSpOmEQrhq9tHicq7.jpg",
    release_date: "2022-08-25",
    title: "Samaritan",
    video: false,
    vote_average: 6.9,
    vote_count: 1253,
    price: 11,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
    genre_ids: "Animation",
    id: 610150,
    original_language: "ja",
    original_title: "ドラゴンボール超 スーパーヒーロー",
    overview:
      "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
    popularity: 1732.958,
    poster_path:
      "https://image.tmdb.org/t/p/w500/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
    release_date: "2022-06-11",
    title: "Dragon Ball Super: Super Hero",
    video: false,
    vote_average: 8,
    vote_count: 1851,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/3PieOs1t6dPHWlgvX3XoqTIQLqN.jpg",
    genre_ids: "Adventure",
    id: 507086,
    original_language: "en",
    original_title: "Jurassic World Dominion",
    overview:
      "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
    popularity: 1858.749,
    poster_path:
      "https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    release_date: "2022-06-01",
    title: "Jurassic World Dominion",
    video: false,
    vote_average: 7,
    vote_count: 3576,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/5EzpTMkpg3DecNoP2DAOBlh0Fi6.jpg",
    genre_ids: "Action",
    id: 993145,
    original_language: "en",
    original_title: "Bullet Proof",
    overview:
      "The Thief  pulls off the robbery of a lifetime when he robs the psychotic drug lord, Temple. The plan goes off without a hitch until the Thief discovers a stowaway in his getaway car - Temple's pregnant wife, Mia.",
    popularity: 2042.704,
    poster_path:
      "https://image.tmdb.org/t/p/w500/cj6YmTAU7Jvn3w6d2NfjQzpX7Pw.jpg",
    release_date: "2022-08-19",
    title: "Bullet Proof",
    video: false,
    vote_average: 4.8,
    vote_count: 13,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/tviTAFuCFRLElylvBAMPjdRnCDZ.jpg",
    genre_ids: "Thriller",
    id: 999205,
    original_language: "en",
    original_title: "Stowaway",
    overview:
      "A tenacious party girl fights to survive after three thieves commandeer her luxury yacht. Unable to escape and trapped on the yacht at high seas, the prey becomes the hunter as she turns the tables on the intruders and takes matters into her own hands.",
    popularity: 1729.906,
    poster_path:
      "https://image.tmdb.org/t/p/w500/1RmugOkBFU5eXu1dbr1zdxChLfQ.jpg",
    release_date: "2022-08-31",
    title: "Stowaway",
    video: false,
    vote_average: 5,
    vote_count: 12,
    price: 7,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/endVnEgUGjibpLaF0yjUX2CWhh4.jpg",
    genre_ids: "Animation",
    id: 1007401,
    original_language: "en",
    original_title: "Mortal Kombat Legends: Snow Blind",
    overview:
      "Hellbent on taking over Earthrealm, Kano viciously attacks town after town with the aid of three cold-blooded Black Dragon mercenaries. Those who don’t submit are annihilated but one young man won’t bend the knee to Kano: Kenshi.",
    popularity: 1317.631,
    poster_path:
      "https://image.tmdb.org/t/p/w500/xvjCiv1xNlK1kNnoe1nul899vIp.jpg",
    release_date: "2022-10-09",
    title: "Mortal Kombat Legends: Snow Blind",
    video: false,
    vote_average: 7.9,
    vote_count: 43,
    price: 11,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
    genre_ids: "Action",
    id: 361743,
    original_language: "en",
    original_title: "Top Gun: Maverick",
    overview:
      "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
    popularity: 1573.222,
    poster_path:
      "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    release_date: "2022-05-24",
    title: "Top Gun: Maverick",
    video: false,
    vote_average: 8.4,
    vote_count: 4204,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/6AxdvA5hiBGF5ajSKsyt0q7rHei.jpg",
    genre_ids: "Action",
    id: 921360,
    original_language: "en",
    original_title: "Wire Room",
    overview:
      "New recruit Justin Rosa must monitor arms-smuggling cartel member Eddie Flynn — and keep him alive at all costs. When a SWAT team descends on Flynn’s home, Rosa breaks protocol and contacts the gangster directly to save his life. As gunmen break into the Wire Room and chaos erupts, Mueller and Rosa make a final, desperate stand against the corrupt agents and officials who seek to destroy evidence and kill them both.",
    popularity: 1525.718,
    poster_path:
      "https://image.tmdb.org/t/p/w500/b9ykj4v8ykjRoGB7SpI1OuxblNU.jpg",
    release_date: "2022-09-02",
    title: "Wire Room",
    video: false,
    vote_average: 6.8,
    vote_count: 90,
    price: 7,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/i9BtOklh2txI78wNSTNjoAZ6Fvj.jpg",
    genre_ids: "Comedy",
    id: 975120,
    original_language: "es",
    original_title: "Padre no hay mas que Uno 3",
    overview:
      "Christmas is coming. The children accidentally break a Nativity scene figurine from their father's collection and must by all means get an equal one, the problem is that it is a unique antique piece. Sara, the eldest daughter breaks up with her boyfriend, Ocho, who will try to recover her favors with the help of her father-in-law, Javier. Precisely Javier's father-in-law, Marisa's father, will be welcomed into the family home to spend the holidays after her recent separation, which will not leave Javier's mother, Milagros, indifferent. Rocío, the folklore of the family, who has been playing the Virgin for several Christmases, is relegated this year toplaying the shepherdess, something that her father, Javier, is not willing to assume.",
    popularity: 1440.519,
    poster_path:
      "https://image.tmdb.org/t/p/w500/k2v9xSPtiyxCNxaRGtj7COwdgG3.jpg",
    release_date: "2022-07-15",
    title: "Father There Is Only One 3",
    video: false,
    vote_average: 7.6,
    vote_count: 101,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/d3l7kgFJyLTTQSrR4ysCk5yeVyW.jpg",
    genre_ids: "Action",
    id: 579974,
    original_language: "te",
    original_title: "రౌద్రం రణం రుధిరం",
    overview:
      "A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.",
    popularity: 1501.7,
    poster_path:
      "https://image.tmdb.org/t/p/w500/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg",
    release_date: "2022-03-24",
    title: "RRR",
    video: false,
    vote_average: 7.8,
    vote_count: 418,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg",
    genre_ids: "Horror",
    id: 756999,
    original_language: "en",
    original_title: "The Black Phone",
    overview:
      "Finney Blake, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
    popularity: 1536.354,
    poster_path:
      "https://image.tmdb.org/t/p/w500/lr11mCT85T1JanlgjMuhs9nMht4.jpg",
    release_date: "2022-06-22",
    title: "The Black Phone",
    video: false,
    vote_average: 7.9,
    vote_count: 2765,
    price: 7,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/7ABsaBkO1jA2psC8Hy4IDhkID4h.jpg",
    genre_ids: "Action",
    id: 19995,
    original_language: "en",
    original_title: "Avatar",
    overview:
      "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    popularity: 1467.132,
    poster_path:
      "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    release_date: "2009-12-15",
    title: "Avatar",
    video: false,
    vote_average: 7.5,
    vote_count: 26295,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/cyV2syN5zRQwU6BmWMyMFyjRLow.jpg",
    genre_ids: "Action",
    id: 843633,
    original_language: "en",
    original_title: "White Elephant",
    overview:
      "An ex-marine enforcer must battle his conscience and code of honor when he is forced to do things for the mob.",
    popularity: 1460.448,
    poster_path:
      "https://image.tmdb.org/t/p/w500/lG56H40Y1BuHSPoWtEgDJsSgDBZ.jpg",
    release_date: "2022-06-03",
    title: "White Elephant",
    video: false,
    vote_average: 6.5,
    vote_count: 71,
    price: 11,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/r79KH5uKwKyfsgHSiXrrsSY8UfN.jpg",
    genre_ids: "Thriller",
    id: 781099,
    original_language: "fr",
    original_title: "Inexorable",
    overview:
      'Desperately seeking inspiration for the follow-up novel to his bestseller "Inexorable", Marcel Bellmer moves in his wife\'s old family mansion with his family.',
    popularity: 1357.668,
    poster_path:
      "https://image.tmdb.org/t/p/w500/iiclsw6zgRJz5D5Cc6sn4Cs9GQo.jpg",
    release_date: "2022-04-06",
    title: "Inexorable",
    video: false,
    vote_average: 6,
    vote_count: 26,
    price: 6,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/yaze6df9AMIA9oeDEbIZ4zOTRCJ.jpg",
    genre_ids: "Fantasy",
    id: 960700,
    original_language: "ja",
    original_title: "鋼の錬金術師 完結編 復讐者スカー",
    overview:
      "The Elric brothers meet their toughest opponent yet — a lone serial killer with a large scar on his forehead.",
    popularity: 1448.17,
    poster_path:
      "https://image.tmdb.org/t/p/w500/c5OwwBNyJkwyroIOIJL9IiRjydR.jpg",
    release_date: "2022-05-20",
    title: "Fullmetal Alchemist: The Revenge of Scar",
    video: false,
    vote_average: 7,
    vote_count: 128,
    price: 9,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/ojfzhdwRemcDt1I6pao6vVLw9AA.jpg",
    genre_ids: "Horror",
    id: 772450,
    original_language: "es",
    original_title: "Presencias",
    overview:
      "A man who loses his wife and goes to seclude himself in a cabin in the woods, where strange things happen.",
    popularity: 1428.763,
    poster_path:
      "https://image.tmdb.org/t/p/w500/dgDT3uol3mdvwEg0jt1ble3l9hw.jpg",
    release_date: "2022-09-07",
    title: "Presences",
    video: false,
    vote_average: 7,
    vote_count: 84,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/geYUecpFI2AonDLhjyK9zoVFcMv.jpg",
    genre_ids: "Animation",
    id: 810693,
    original_language: "ja",
    original_title: "劇場版 呪術廻戦 0",
    overview:
      "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at JujutsuHigh, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time toconfront the curse that haunts him?",
    popularity: 1240.449,
    poster_path:
      "https://image.tmdb.org/t/p/w500/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg",
    release_date: "2021-12-24",
    title: "Jujutsu Kaisen 0",
    video: false,
    vote_average: 8.3,
    vote_count: 587,
    price: 11,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/rHzoz94bRfyfNLjiIB26Wt5KDHE.jpg",
    genre_ids: "Action",
    id: 773867,
    original_language: "ko",
    original_title: "서울대작전",
    overview:
      "Chasing speed, dreams and money, a team of drivers get involved in the slush fund investigation of a powerful figure during the 1988 Seoul Olympics.",
    popularity: 1286.404,
    poster_path:
      "https://image.tmdb.org/t/p/w500/txaOvJ6HURmqFbpVtJezWNWqaR4.jpg",
    release_date: "2022-08-26",
    title: "Seoul Vibe",
    video: false,
    vote_average: 6.9,
    vote_count: 88,
    price: 9,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/7NCRlXDQlHhFZFk3y1HJyJgGVHB.jpg",
    genre_ids: "Action",
    id: 675353,
    original_language: "en",
    original_title: "Sonic the Hedgehog 2",
    overview:
      "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into thewrong hands.",
    popularity: 1235.81,
    poster_path:
      "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    release_date: "2022-03-30",
    title: "Sonic the Hedgehog 2",
    video: false,
    vote_average: 7.7,
    vote_count: 3116,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/c4Fl1cWiXcq4uJdOQudQClFjhho.jpg",
    genre_ids: "Fantasy",
    id: 10439,
    original_language: "en",
    original_title: "Hocus Pocus",
    overview:
      "After 300 years of slumber, three sister witches are accidentally resurrected in Salem on Halloween night, and it is upto three kids and their newfound feline friend to put an end to the witches' reign of terror once and for all.",
    popularity: 1132.444,
    poster_path:
      "https://image.tmdb.org/t/p/w500/by4D4Q9NlUjFSEUA1yrxq6ksXmk.jpg",
    release_date: "1993-07-16",
    title: "Hocus Pocus",
    video: false,
    vote_average: 7.1,
    vote_count: 2360,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    genre_ids: "Action",
    id: 634649,
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    overview:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    popularity: 1116.785,
    poster_path:
      "https://image.tmdb.org/t/p/w500/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
    release_date: "2021-12-15",
    title: "Spider-Man: No Way Home",
    video: false,
    vote_average: 8,
    vote_count: 15365,
    price: 9,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg",
    genre_ids: "Science Fiction",
    id: 76600,
    original_language: "en",
    original_title: "Avatar: The Way of Water",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    popularity: 989.797,
    poster_path:
      "https://image.tmdb.org/t/p/w500/1yppMeTNQwDrzaUH4dRCx4mr8We.jpg",
    release_date: "2022-12-14",
    title: "Avatar: The Way of Water",
    video: false,
    vote_average: 0,
    vote_count: 0,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
    genre_ids: "Horror",
    id: 717728,
    original_language: "en",
    original_title: "Jeepers Creepers: Reborn",
    overview:
      "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated withthe urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the centerof it while something unearthly has been summoned.",
    popularity: 969.522,
    poster_path:
      "https://image.tmdb.org/t/p/w500/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
    release_date: "2022-09-15",
    title: "Jeepers Creepers: Reborn",
    video: false,
    vote_average: 5.8,
    vote_count: 182,
    price: 9,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/A2XhlMUimRDViZDuJPeDtaJoHmT.jpg",
    genre_ids: "Animation",
    id: 1015602,
    original_language: "en",
    original_title: "Welcome to the Club",
    overview:
      "Heart set on becoming a princess, Lisa Simpson is surprised to learn being bad might be more fun.",
    popularity: 1017.832,
    poster_path:
      "https://image.tmdb.org/t/p/w500/kxB9E6fo0ycHzd13oOTHmGa5Njd.jpg",
    release_date: "2022-09-08",
    title: "Welcome to the Club",
    video: false,
    vote_average: 6.6,
    vote_count: 92,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/gUNRlH66yNDH3NQblYMIwgZXJ2u.jpg",
    genre_ids: "Fantasy",
    id: 453395,
    original_language: "en",
    original_title: "Doctor Strange in the Multiverse of Madness",
    overview:
      "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    popularity: 1116.751,
    poster_path:
      "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    release_date: "2022-05-04",
    title: "Doctor Strange in the Multiverse of Madness",
    video: false,
    vote_average: 7.5,
    vote_count: 5981,
    price: 7,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/3p3amyz5nXK9AW4VARqkPaMAG5J.jpg",
    genre_ids: "Animation",
    id: 585511,
    original_language: "en",
    original_title: "Luck",
    overview:
      "Suddenly finding herself in the never-before-seen Land of Luck, the unluckiest person in the world must unite with the magical creatures there to turn her luck around.",
    popularity: 975.92,
    poster_path:
      "https://image.tmdb.org/t/p/w500/1HOYvwGFioUFL58UVvDRG6beEDm.jpg",
    release_date: "2022-08-05",
    title: "Luck",
    video: false,
    vote_average: 8,
    vote_count: 784,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/lGq3XvgVjJUqXs3REwNa2H9HMi6.jpg",
    genre_ids: "Mystery",
    id: 936897,
    original_language: "en",
    original_title: "Curious Caterer: Dying for Chocolate",
    overview:
      "Goldy is a spirited single mom who’s thrust into the role of town sleuth to help solve a friend’s mysterious death. With the clock ticking to find the culprit, Goldy strikes up an unlikely partnership with Detective Tom Schultz, who leans into Goldy’s local knowledge. As their relationship shows signs of becoming something more, the suspect list rises. Will Goldy narrow in on the killer before the killer narrows in on her?",
    popularity: 1004.934,
    poster_path:
      "https://image.tmdb.org/t/p/w500/7quPRcCVUmMBxKO58QwPuIADtYG.jpg",
    release_date: "2022-04-10",
    title: "Curious Caterer: Dying for Chocolate",
    video: false,
    vote_average: 6.2,
    vote_count: 11,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/5luJmy21N3bYCkjzRHsoZfvLtPP.jpg",
    genre_ids: "Thriller",
    id: 773975,
    original_language: "en",
    original_title: "End of the Road",
    overview:
      "Recently widowed mom Brenda fights to protect her family during a harrowing road trip when a murder and a missing bag of cash plunge them into danger.",
    popularity: 957.592,
    poster_path:
      "https://image.tmdb.org/t/p/w500/tLFIMuPWJHlTJ6TN8HCOiSD6SdA.jpg",
    release_date: "2022-09-09",
    title: "End of the Road",
    video: false,
    vote_average: 6.5,
    vote_count: 172,
    price: 7,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/qJQSB0UDYW3XdKSTcclI1kdp3hZ.jpg",
    genre_ids: "Thriller",
    id: 952374,
    original_language: "en",
    original_title: "The Aviary",
    overview:
      "A twisted journey of two women’s desperate flee to escape the clutches of Skylight, an insidious cult. Lured in by the promise of “freedom” in the isolated desert campus called The Aviary, Jillian and Blair join forces to escape in hopes of real freedom. Consumed by fear and paranoia, they can’t shake the feeling that they are being followed by the cult’s leader, Seth, a man as seductive as he is controlling. The more distance the pair gains from the cult, the more Seth holds control of their minds. With supplies dwindling and their senses failing, Jillian and Blair are faced with a horrifying question: how do you run from an enemy who lives inside your head?",
    popularity: 946.155,
    poster_path:
      "https://image.tmdb.org/t/p/w500/u6HUQcOQsgkFFO8xCITfxQz6ivc.jpg",
    release_date: "2022-04-29",
    title: "The Aviary",
    video: false,
    vote_average: 5.8,
    vote_count: 18,
    price: 11,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/sB4Qee1z6Mkood7WNdUJSJJF0s0.jpg",
    genre_ids: "Drama",
    id: 301502,
    original_language: "en",
    original_title: "Blonde",
    overview:
      "From her volatile childhood as Norma Jeane, through her rise to stardom and romantic entanglements, this reimagined fictional portrait of Hollywood legend Marilyn Monroe blurs the lines of fact and fiction to explore the widening split between her public and private selves.",
    popularity: 822.87,
    poster_path:
      "https://image.tmdb.org/t/p/w500/jOgbnL5FB30pprEjZaY1E1iPtPM.jpg",
    release_date: "2022-09-16",
    title: "Blonde",
    video: false,
    vote_average: 6.6,
    vote_count: 471,
    price: 9,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/nYla7faWqM3nLCY9arQH1DwXC84.jpg",
    genre_ids: "Animation",
    id: 576925,
    original_language: "ru",
    original_title: "Бука. Моё любимое чудище",
    overview:
      "A scandal in the royal family: the wayward princess Barbara escaped from the palace and went through the forest in search of a handsome prince. However, instead of the cherished meeting with her beloved, she is captured by Buka, the most dangerous robber of the kingdom. But it quickly becomes clear that the brisk princess is ready to turn Buka's life into a nightmare, just to reach her goal. So the restless Varvara begins to establish her own order in the forest.",
    popularity: 853.049,
    poster_path:
      "https://image.tmdb.org/t/p/w500/xIbEHAqwK5N7PJJYmbwmxuvC7fL.jpg",
    release_date: "2022-01-27",
    title: "My Sweet Monster",
    video: false,
    vote_average: 6.1,
    vote_count: 18,
    price: 9,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
    genre_ids: "Animation",
    id: 508947,
    original_language: "en",
    original_title: "Turning Red",
    overview:
      "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
    popularity: 884.424,
    poster_path:
      "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
    release_date: "2022-03-10",
    title: "Turning Red",
    video: false,
    vote_average: 7.5,
    vote_count: 3377,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/xVbppM1xgbskOKgOuV8fbWBWHtt.jpg",
    genre_ids: "Horror",
    id: 762504,
    original_language: "en",
    original_title: "Nope",
    overview:
      "Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
    popularity: 925.773,
    poster_path:
      "https://image.tmdb.org/t/p/w500/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
    release_date: "2022-07-20",
    title: "Nope",
    video: false,
    vote_average: 7,
    vote_count: 1710,
    price: 6,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/jazlkwXfw4KdF6fVTRsolOvRCmu.jpg",
    genre_ids: "Thriller",
    id: 924482,
    original_language: "en",
    original_title: "The Ledge",
    overview:
      "A rock climbing adventure between two friends turns into a terrifying nightmare. After Kelly captures the murder of her best friend on camera, she becomes the next target of a tight knit group of friends who will stop at nothing to destroy the evidence and anyone in their way. Desperate for her safety, she begins a treacherous climb up a mountain cliff and her survival instincts are put to the test when she becomes trapped with the killers just 20 feet away.",
    popularity: 998.202,
    poster_path:
      "https://image.tmdb.org/t/p/w500/S99eCSnRFfeZJmDaIGIZF58H7w.jpg",
    release_date: "2022-02-18",
    title: "The Ledge",
    video: false,
    vote_average: 6.3,
    vote_count: 114,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/ftGzl2GCyko61Qp161bQElN2Uzd.jpg",
    genre_ids: "Action",
    id: 961484,
    original_language: "en",
    original_title: "Last Seen Alive",
    overview:
      "After Will Spann's wife suddenly vanishes at a gas station, his desperate search to find her leads him down a dark path that forces him to run from authorities and take the law into his own hands.",
    popularity: 728.227,
    poster_path:
      "https://image.tmdb.org/t/p/w500/qvqyDj34Uivokf4qIvK4bH0m0qF.jpg",
    release_date: "2022-05-19",
    title: "Last Seen Alive",
    video: false,
    vote_average: 6.6,
    vote_count: 326,
    price: 9,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
    genre_ids: "Animation",
    id: 568124,
    original_language: "en",
    original_title: "Encanto",
    overview:
      "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
    popularity: 783.154,
    poster_path:
      "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    release_date: "2021-11-24",
    title: "Encanto",
    video: false,
    vote_average: 7.7,
    vote_count: 7418,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/gX6VtQ7X6GRvcJQJhFZO9ZJ00q7.jpg",
    genre_ids: "Horror",
    id: 816952,
    original_language: "en",
    original_title: "My Best Friend's Exorcism",
    overview:
      "The year is 1988. Abby and Gretchen have been best friends since fourth grade. After an evening of skinny-dipping goes disastrously wrong, Gretchen begins to act…different, which leads Abby to suspect her best friend may be possessed by a demon. With help from some unlikely allies, Abby embarks on a quest to save Gretchen. But is their friendship powerful enough to beat the devil?",
    popularity: 983.765,
    poster_path:
      "https://image.tmdb.org/t/p/w500/yIXICkqthsqbNtvtEd6rpIt3cT4.jpg",
    release_date: "2022-09-29",
    title: "My Best Friend's Exorcism",
    video: false,
    vote_average: 6,
    vote_count: 50,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/qjGrUmKW78MCFG8PTLDBp67S27p.jpg",
    genre_ids: "Animation",
    id: 635302,
    original_language: "ja",
    original_title: "劇場版「鬼滅の刃」無限列車編",
    overview:
      "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
    popularity: 759.987,
    poster_path:
      "https://image.tmdb.org/t/p/w500/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
    release_date: "2020-10-16",
    title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    video: false,
    vote_average: 8.3,
    vote_count: 2731,
    price: 6,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/hwUxHPkuUleJeoick4uZsrKDXxF.jpg",
    genre_ids: "Animation",
    id: 718789,
    original_language: "en",
    original_title: "Lightyear",
    overview:
      "Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.",
    popularity: 787.202,
    poster_path:
      "https://image.tmdb.org/t/p/w500/65WFr1ZMAbEniIh4jEhbRG9OHHN.jpg",
    release_date: "2022-06-15",
    title: "Lightyear",
    video: false,
    vote_average: 7.2,
    vote_count: 2197,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/hTR85UGsCY0LmSZrUx9RC0eD5WJ.jpg",
    genre_ids: "Comedy",
    id: 804413,
    original_language: "en",
    original_title: "The Munsters",
    overview:
      "Lily is a typical 150-year-old lovelorn vampire who's looking for the man of her nightmares -- until she lays her eyes on Herman, a 7-foot-tall green experiment with a heart of gold. It's love at first shock as these two ghouls fall fangs over feet for each other in a Transylvanian romance. Unfortunately, it's not all smooth sailing in the cemetery as Lily's father has other plans for his beloved daughter's future, and they don't involve her new bumbling beau.",
    popularity: 841.018,
    poster_path:
      "https://image.tmdb.org/t/p/w500/kJaEVFhDouD72GKANMkYqzQky9n.jpg",
    release_date: "2022-09-27",
    title: "The Munsters",
    video: false,
    vote_average: 6.3,
    vote_count: 102,
    price: 7,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/9mprVUhXPjdpSaiSon44uG9Dnv2.jpg",
    genre_ids: "Comedy",
    id: 838197,
    original_language: "it",
    original_title: "Altrimenti ci arrabbiamo",
    overview:
      "Carezza and Sorriso, brothers very different from each other and in quarrel since childhood, will have to put aside their controversies to recover the legendary Dune Buggy, once belonged to their beloved father and now stolen from him by Torsillo, an unscrupulous building speculator, and his son Raniero. In doing so, they will forge an unusual alliance with a circus community, headed by the beautiful and dangerous Miriam and threatened by Torsillo's dirty business. Between daring chases, memorable fights and delicate meals based on beer and sausages, will the two brothers be able to find their beloved car?",
    popularity: 789.305,
    poster_path:
      "https://image.tmdb.org/t/p/w500/gfQiGDB6EFKXQJo6eY0qmZIcf41.jpg",
    release_date: "2022-03-23",
    title: "Watch Out, We're Mad",
    video: false,
    vote_average: 5.2,
    vote_count: 76,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    genre_ids: "Crime",
    id: 414906,
    original_language: "en",
    original_title: "The Batman",
    overview:
      "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    popularity: 771.099,
    poster_path:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    release_date: "2022-03-01",
    title: "The Batman",
    video: false,
    vote_average: 7.7,
    vote_count: 6433,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
    genre_ids: "Action",
    id: 752623,
    original_language: "en",
    original_title: "The Lost City",
    overview:
      "Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to the ancient city's lost treasure that featured in her latest story. Alan, determined to prove he can be a hero in real life and not just on the pages of her books, sets off to rescue her.",
    popularity: 761.427,
    poster_path:
      "https://image.tmdb.org/t/p/w500/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
    release_date: "2022-03-24",
    title: "The Lost City",
    video: false,
    vote_average: 6.8,
    vote_count: 2020,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/xHRabofjmMGoIV3mb6xgy4nwOcS.jpg",
    genre_ids: "Horror",
    id: 801071,
    original_language: "en",
    original_title: "The Jack in the Box: Awakening",
    overview:
      "When a vintage Jack-in-the-box is opened by a dying woman, she enters into a deal with the demon within that would see her illness cured in return for helping it claim six innocent victims.",
    popularity: 811.684,
    poster_path:
      "https://image.tmdb.org/t/p/w500/3Ib8vlWTrAKRrTWUrTrZPOMW4jp.jpg",
    release_date: "2022-02-24",
    title: "The Jack in the Box: Awakening",
    video: false,
    vote_average: 6.4,
    vote_count: 160,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/21ldFAokKVjwzi1SHXoPb5gc7md.jpg",
    genre_ids: "Horror",
    id: 760104,
    original_language: "en",
    original_title: "X",
    overview:
      "In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.",
    popularity: 715.338,
    poster_path:
      "https://image.tmdb.org/t/p/w500/woTQx9Q4b8aO13jR9dsj8C9JESy.jpg",
    release_date: "2022-03-17",
    title: "X",
    video: false,
    vote_average: 6.8,
    vote_count: 1044,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/b1L7qevxiVpkVFq4dmdQPGFPWH0.jpg",
    genre_ids: "Horror",
    id: 836225,
    original_language: "en",
    original_title: "The Exorcism of God",
    overview:
      "An American priest working in Mexico is considered a saint by many local parishioners. However, due to a botched exorcism, he carries a secret that’s eating him alive until he gets an opportunity to face his demon one final time.",
    popularity: 775.501,
    poster_path:
      "https://image.tmdb.org/t/p/w500/hangTmbxpSV4gpHG7MgSlCWSSFa.jpg",
    release_date: "2022-03-11",
    title: "The Exorcism of God",
    video: false,
    vote_average: 7.3,
    vote_count: 641,
    price: 7,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/bL7VIHQ4Nl0hZMw8ZeX6byoEEZJ.jpg",
    genre_ids: "Science Fiction",
    id: 1006851,
    original_language: "en",
    original_title: "Office Invasion",
    overview:
      "Three friends come together to defend their valuable mining company from…aliens?! What could possibly go wrong?",
    popularity: 728.059,
    poster_path:
      "https://image.tmdb.org/t/p/w500/khcVwO0gwguC1CndbxtH1bzk4aj.jpg",
    release_date: "2022-08-10",
    title: "Office Invasion",
    video: false,
    vote_average: 5.8,
    vote_count: 86,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/6cpRpfD3isvluFwXDGSiDVyibPJ.jpg",
    genre_ids: "Romance",
    id: 829560,
    original_language: "pl",
    original_title: "The Next 365 Days",
    overview:
      "Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a tenacious Nacho works to push them apart.",
    popularity: 663.98,
    poster_path:
      "https://image.tmdb.org/t/p/w500/6FsGeIp7heHm5eh4tIxTzHIRxmt.jpg",
    release_date: "2022-08-19",
    title: "The Next 365 Days",
    video: false,
    vote_average: 6.6,
    vote_count: 493,
    price: 6,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/9bColKVEAaWfmOLiLZoUhdYfevy.jpg",
    genre_ids: "Animation",
    id: 1010818,
    original_language: "en",
    original_title: "Groot's First Steps",
    overview:
      "Following the events of “Guardians of the Galaxy Vol. 1,” Baby Groot is finally ready to try taking his first steps out of his pot—only to learn you have to walk before you can run.",
    popularity: 692.518,
    poster_path:
      "https://image.tmdb.org/t/p/w500/1ifiV9ZJD4tC3tRYcnLIzH0meaB.jpg",
    release_date: "2022-08-10",
    title: "Groot's First Steps",
    video: false,
    vote_average: 7.3,
    vote_count: 165,
    price: 9,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/2UEKQtkx35hGCkgfA5lPVu7GaAm.jpg",
    genre_ids: "Animation",
    id: 782054,
    original_language: "ja",
    original_title: "Doraemon: Nobita's Little Star Wars 2021",
    overview:
      "One day during summer vacation, a palm-sized alien named Papi appears from a small rocket that Nobita picks up. He is the president of Pirika, a small planet in outer space, and has come to Earth to escape the rebels. Doraemon and his friends are puzzled by Papi’s small size, but as they play together using the secret tool “Small Light”, they gradually become friends. However, a whale-shaped space battleship comes to earth and attacks Doraemon, Nobita and the others in order to capture Papi. Feeling responsible for getting everyone involved, Papi tries to stand up to the rebels. Doraemon and his friends leave for the planet Pirika to protect their dear friend and his home.",
    popularity: 666.202,
    poster_path:
      "https://image.tmdb.org/t/p/w500/48gKZioIDeUOI0afbYv3kh9u9RQ.jpg",
    release_date: "2022-03-04",
    title: "Doraemon: Nobita's Little Star Wars 2021",
    video: false,
    vote_average: 5.6,
    vote_count: 5,
    price: 7,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/zlLQXKsSa2CEkz3UBFWPUPX90PN.jpg",
    genre_ids: "Thriller",
    id: 968857,
    original_language: "en",
    original_title: "Looks Can Kill",
    overview:
      "A group of models is killed off, one by one, and everyone is a suspect.",
    popularity: 720.024,
    poster_path:
      "https://image.tmdb.org/t/p/w500/1uy2PNFwtkqH3mhGd6irk5aeIrF.jpg",
    release_date: "2022-02-01",
    title: "Looks Can Kill",
    video: false,
    vote_average: 5.5,
    vote_count: 7,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/pkLegAR3G5T63B2Xz2ijbD1BAm8.jpg",
    genre_ids: "Horror",
    id: 927341,
    original_language: "en",
    original_title: "Hunting Ava Bravo",
    overview:
      "Billionaire sportsman Buddy King unwinds by hunting human captives on his remote mountain estate. But his latest victim, Ava Bravo is no easy target.",
    popularity: 713.76,
    poster_path:
      "https://image.tmdb.org/t/p/w500/etc6HKBEhNySNnYU2nRgbSeIyoW.jpg",
    release_date: "2022-04-01",
    title: "Hunting Ava Bravo",
    video: false,
    vote_average: 6.5,
    vote_count: 76,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/cugmVwK0N4aAcLibelKN5jWDXSx.jpg",
    genre_ids: "Animation",
    id: 768744,
    original_language: "ja",
    original_title:
      "僕のヒーローアカデミア THE MOVIE ワールド ヒーローズ ミッション",
    overview:
      "A mysterious group called Humarize strongly believes in the Quirk Singularity Doomsday theory which states that when quirks get mixed further in with future generations, that power will bring forth the end of humanity. In order to save everyone, the Pro-Heroes around the world ask UA Academy heroes-in-training to assist them and form a world-class selected hero team. It’s up to the heroes to save the world and the future of heroes in what is the most dangerous crisis to take place yet in My Hero Academia.",
    popularity: 600.8,
    poster_path:
      "https://image.tmdb.org/t/p/w500/AsTlA7dj2ySGY1pzGSD0MoHFhEF.jpg",
    release_date: "2021-08-06",
    title: "My Hero Academia: World Heroes' Mission",
    video: false,
    vote_average: 7.6,
    vote_count: 300,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/7id7oE3gqZuO0piWN20Ev7V90wl.jpg",
    genre_ids: "Animation",
    id: 877957,
    original_language: "ja",
    original_title: "雨を告げる漂流団地",
    overview:
      "Sixth-graders Kosuke and Natsume grew up in the same apartment building as childhood friends. During summer break, while playing in the apartment building that is set to be demolished, they find themselves caught in a strange phenomenon. All they can see around them is a vast sea. Will Kosuke and the others make it back to their world? A journey of farewells in summer has just begun.",
    popularity: 599.709,
    poster_path:
      "https://image.tmdb.org/t/p/w500/iNf1wC8cK6e8zgNyuMUqWFT7Din.jpg",
    release_date: "2022-09-09",
    title: "Drifting Home",
    video: false,
    vote_average: 7.8,
    vote_count: 67,
    price: 8,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/mCAkUizRRIwKMOlne9CIoJ3utSc.jpg",
    genre_ids: "Thriller",
    id: 951368,
    original_language: "en",
    original_title: "Your Boyfriend Is Mine",
    overview:
      "Over the objection of his girlfriend, Ben agrees to take a job as the “live in” man servant to a wealthy businesswoman, Amanda, but quickly realizes he has made a deal with the devil, and has put himself and his girlfriend in mortal jeopardy",
    popularity: 696.749,
    poster_path:
      "https://image.tmdb.org/t/p/w500/2OOYNZLKjdX8Z5KNyz7zZnHmodJ.jpg",
    release_date: "2022-03-19",
    title: "Your Boyfriend Is Mine",
    video: false,
    vote_average: 6.8,
    vote_count: 36,
    price: 7,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/l99dylTOAMkwKSr54X5ytiEtnLA.jpg",
    genre_ids: "Fantasy",
    id: 919355,
    original_language: "en",
    original_title: "Dragon Knight",
    overview:
      "Many years after the war has been lost, and all the dragons slain, a lone knight travels the lands of Agonos seeking to raise an army against the demon lord Abaddon. When a healer's vision reveals that one dragon still lives, and together with an eager young squire, the knight sets off in search of the fabled creature. As the armies of Abaddon descend on the human kingdoms, the dragon is their last hope of fending off the horde, before it lays waste to the lands of men. But does the creature even exist? And if it does, will it fight for them once more?",
    popularity: 667.275,
    poster_path:
      "https://image.tmdb.org/t/p/w500/zkGFADykBtfPfTv7YJooxTH52ph.jpg",
    release_date: "2022-03-21",
    title: "Dragon Knight",
    video: false,
    vote_average: 7.1,
    vote_count: 31,
    price: 7,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/iGHFjqxH5c8zRibnZbh9qEYTBho.jpg",
    genre_ids: "Action",
    id: 1008779,
    original_language: "es",
    original_title: "La Princesa",
    overview:
      'Refusing to marry a drug lord, Grecia is determined to pay her father\'s debt herself. To earn the money, she decides to\nbet in the Sinaloa palenques, where she meets Armando. He is immediately captivated by her beauty and fearless attitude. But, little does he know that falling for her will be his most dangerous endeavor. Based on the famous corrido hit "La Princesa", by Alfredo Ríos "El Komander".',
    popularity: 661.958,
    poster_path:
      "https://image.tmdb.org/t/p/w500/ksxiXqwPuEjh3gct1zUpyzNoQFt.jpg",
    release_date: "2022-02-01",
    title: "The princess",
    video: false,
    vote_average: 7.3,
    vote_count: 69,
    price: 7,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/m3Ys7UDzUzOyoPYKzp4GhKKokUr.jpg",
    genre_ids: "Animation",
    id: 585083,
    original_language: "en",
    original_title: "Hotel Transylvania: Transformania",
    overview:
      "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
    popularity: 597.326,
    poster_path:
      "https://image.tmdb.org/t/p/w500/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
    release_date: "2022-02-25",
    title: "Hotel Transylvania: Transformania",
    video: false,
    vote_average: 7.1,
    vote_count: 1226,
    price: 9,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/qViFGWCHaSmW4gP00RGh3xjMjsP.jpg",
    genre_ids: "Horror",
    id: 758724,
    original_language: "en",
    original_title: "The Cellar",
    overview:
      "When Keira Woods' daughter mysteriously vanishes in the cellar of their new house in the country, she soon discovers there is an ancient and powerful entity controlling their home that she will have to face or risk losing her family's souls forever.",
    popularity: 645.304,
    poster_path:
      "https://image.tmdb.org/t/p/w500/rtfGeS5WMXA6PtikIYUmYTSbVdg.jpg",
    release_date: "2022-03-25",
    title: "The Cellar",
    video: false,
    vote_average: 6.6,
    vote_count: 261,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/4bsz75kSdeVQm9u5aD87ciRpYVW.jpg",
    genre_ids: "Animation",
    id: 1010821,
    original_language: "en",
    original_title: "Groot Takes a Bath",
    overview:
      "Everybody needs some alone time to relax and wash up, but things go quite differently when you’re a Flora Colossi toddler.",
    popularity: 593.299,
    poster_path:
      "https://image.tmdb.org/t/p/w500/sN7FJP06TsNNtK9Jr77dc25yI82.jpg",
    release_date: "2022-08-10",
    title: "Groot Takes a Bath",
    video: false,
    vote_average: 7,
    vote_count: 148,
    price: 10,
  },
  {
    adult: false,
    backdrop_path:
      "https://image.tmdb.org/t/p/w500/ecPB0jEuPGoAL0nH1r0831DUt3r.jpg",
    genre_ids: "Action",
    id: 818397,
    original_language: "en",
    original_title: "Memory",
    overview:
      "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",
    popularity: 638.836,
    poster_path:
      "https://image.tmdb.org/t/p/w500/fnWkAPvbVNVOKpQ3ZBaqnskuCJO.jpg",
    release_date: "2022-04-28",
    title: "Memory",
    video: false,
    vote_average: 7.2,
    vote_count: 850,
    price: 8,
  },
];

module.exports = filmsData;
