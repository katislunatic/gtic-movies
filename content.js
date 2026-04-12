const movies = [
  { title:"Anaconda", rating:"PG-13", desc:"The legendary predator returns.", link:"https://vidnest.fun/movie/1234731", category:"Halloween", img:"https://media.themoviedb.org/t/p/w533_and_h300_face/h0bcxrUI9l46YjkgopGO9q71xZD.jpg" },
  { title:"The Super Mario Galaxy Movie", rating:"PG", desc:"Mario embarks on an intergalactic adventure to rescue Princess Peach across the cosmos.", link:"https://vidnest.fun/movie/1226863", category:"Family", img:"https://m.media-amazon.com/images/M/MV5BODc1OTI0ODctYjNmNi00OWZiLWEyZTMtNzZmNTZiNGM3YzYyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg" },
  { title:"Blue My Mind", rating:"NR", desc:"A teenage girl undergoes a terrifying transformation as she discovers her true nature.", link:"https://vidnest.fun/movie/455974", category:"Drama", img:"https://m.media-amazon.com/images/S/pv-target-images/15bde55dc223c3c68e00f77bcd926f072d5c05c159970810f595a1c0cf8e87c5.png" },
  { title:"Backrooms", rating:"COMING SOON", desc:"A young cinematographer's descent into the eerie reality. Based on the viral horror phenomenon.", link:"#", category:"Halloween", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLmtwlJmhqSrqTK0CmtLhc-9AF6kcgo8y8ORQVH7FLuzREvYdoph63RXb&s=10" },
  { title:"Zootopia 2", rating:"PG", desc:"Judy and Nick return to crack a wild mystery in Zootopia.", link:"https://vidnest.fun/movie/1084242", category:"Family", img:"https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/44d994ac-3f6c-4d9d-8000-fd8f4bfc9cfc/compose?aspectRatio=1.78&format=webp&width=1200" },
  { title:"We Can Be Heroes", rating:"PG", desc:"Kids of superheroes must save their parents and the world.", link:"https://vidnest.fun/movie/615677", category:"Family", img:"https://image.tmdb.org/t/p/w1280/iVbV8IwLe65DFffbqVz9kcMRnnH.jpg" },
  { title:"The Wrecking Crew", rating:"R", desc:"Two mismatched detectives take down a criminal conspiracy.", link:"https://vidnest.fun/movie/1168190", category:"Action", img:"https://preview.redd.it/the-wrecking-crew-2026-new-prime-video-movie-v0-l7311klm85gg1.jpeg?auto=webp&s=d2f8c3588197d6cff5202d9cb6f4d1e4b6c1c0bd" },
  { title:"The Parent Trap", rating:"PG", desc:"Twice the Fun, Double the Trouble.", link:"https://vidnest.fun/movie/9820", category:"Family", img:"https://ntvb.tmsimg.com/assets/p21442_v_h10_ab.jpg?w=1280&h=720" },
  { title:"The Lorax", rating:"PG", desc:"Bright colors and a 'save the trees' message.", link:"https://gtic-home.short.gy/Qz4XTe", category:"Family", img:"https://m.media-amazon.com/images/I/61xmDC+2x7L._UF894,1000_QL80_.jpg" },
  { title:"The Curse of Bridge Hollow", rating:"PG-13", desc:"Father and daughter save their town from spirits.", link:"https://gtic-home.short.gy/tpUnyh", category:"Halloween", img:"https://i.ytimg.com/vi/f93J5Bhrf5Q/maxresdefault.jpg" },
  { title:"The Black Phone", rating:"R", desc:"Dark thriller from Blumhouse.", link:"https://gtic-home.short.gy/9JmW8h", category:"Halloween", img:"https://i0.wp.com/www.friendsofcc.com/wp-content/uploads/2022/06/02-bp-dm-mobile-banner-1080x745-rr-f01-052622-62902757c6bea-1-e1656788983973.jpg?fit=919%2C496&ssl=1" },
  { title:"Superman", rating:"PG-13", desc:"The new chapter in DC's legacy.", link:"https://gtic-home.short.gy/Y3QXuR", category:"Action", img:"https://flixchatter.net/wp-content/uploads/2025/07/gunn-superman-2025.jpg" },
  { title:"The Super Mario Bros. Movie", rating:"PG", desc:"Action, nostalgia, and fun.", link:"https://gtic-home.short.gy/RYrb3q", category:"Action", img:"https://i.ytimg.com/vi/PlBwcQic1vI/maxresdefault.jpg" },
  { title:"Sonic the Hedgehog 3", rating:"PG", desc:"Sonic faces his biggest challenge yet.", link:"https://gtic-home.short.gy/BQ9ZoC", category:"Action", img:"https://thecollision.org/wp-content/uploads/2024/12/sonic3.png" },
  { title:"Sonic the Hedgehog 2", rating:"PG", desc:"Sonic teams up with Tails.", link:"https://gtic-home.short.gy/e68XtB", category:"Action", img:"https://static0.moviewebimages.com/wordpress/wp-content/uploads/2022/02/sonic-2-poster.jpg" },
  { title:"Sonic the Hedgehog", rating:"PG", desc:"Sonic joins the adventure in live-action.", link:"https://gtic-home.short.gy/xL1ftq", category:"Action", img:"https://miro.medium.com/1*bjdQG6NqjdtpvMeb0OAVBQ.jpeg" },
  { title:"Red One", rating:"PG-13", desc:"Holiday adventure with The Rock.", link:"https://gtic-home.short.gy/CgaE2Y", category:"Christmas", img:"https://ntvb.tmsimg.com/assets/p26548425_v_h8_aa.jpg?w=1280&h=720" },
  { title:"M3GAN 2.0", rating:"PG-13", desc:"The AI terror returns.", link:"https://gtic-home.short.gy/cHbEJq", category:"Halloween", img:"https://i.ytimg.com/vi/6HInuht789U/maxresdefault.jpg" },
  { title:"M3GAN", rating:"PG-13", desc:"Creepy doll meets technology.", link:"https://gtic-home.short.gy/7oEn8H", category:"Halloween", img:"https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6402d394a80141001df76adf.jpg" },
  { title:"Mission: Impossible 8", rating:"PG-13", desc:"The final reckoning for Ethan Hunt.", link:"https://gtic-home.short.gy/6dxKAC", category:"Action", img:"https://img.englishcinemaparis.com/gvhsMT4MMV_MrmPc8kejNbesyIS9xsxDhMTETlqzcGo/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy9hNjdhNzUyZi0wNzAyLTQ3NmYtYjlhOC1hODc5ZjdmMTU0ZjEuanBn.jpg" },
  { title:"KPop Demon Hunters", rating:"PG-13", desc:"K-Pop stars fight demons in epic battles.", link:"https://gtic-home.short.gy/0TCvNH", category:"Action", img:"https://thefilmlegacy.com/wp-content/uploads/2025/07/k-pop-demon-hunters.jpg?w=960" },
  { title:"Five Nights at Freddy's 2", rating:"PG-13", desc:"New nightmares awaken at Fazbear's.", link:"https://gtic-home.short.gy/hnpEfD", category:"Halloween", img:"https://m.media-amazon.com/images/M/MV5BZjczNjMxYTgtZTMxOS00MTg5LWFiMjYtYzIwMDQ5MTQ3ODU0XkEyXkFqcGdeQWFybm8@._V1_.jpg" },
  { title:"Five Nights at Freddy's", rating:"PG-13", desc:"Survive the night at Freddy Fazbear's Pizza.", link:"https://gtic-home.short.gy/GOFNw3", category:"Halloween", img:"https://4kwallpapers.com/images/wallpapers/five-nights-at-3840x2160-13263.jpg" },
  { title:"Fall", rating:"PG-13", desc:"Two friends get stuck on a 2,000-foot radio tower.", link:"https://gtic-home.short.gy/RF4Dxt", category:"Action", img:"https://www.cdcun.com/media/news/1102_thumb.jpg" },
  { title:"Dog Man", rating:"PG", desc:"Part dog, part man, all hero.", link:"https://gtic-home.short.gy/G4Q2Kq", category:"Family", img:"https://4kwallpapers.com/images/walls/thumbs_3t/21440.jpg" },
  { title:"Dear Santa", rating:"PG", desc:"Jack Black stars in this holiday comedy.", link:"https://gtic-home.short.gy/1zJ5Hu", category:"Christmas", img:"https://ntvb.tmsimg.com/assets/p28597719_v_h8_aa.jpg?w=960&h=540" },
  { title:"Daddy's Home 2", rating:"PG-13", desc:"Brad and Dusty must survive the holidays when their own dads show up and chaos ensues.", link:"https://vidnest.fun/movie/419680", category:"Christmas", img:"https://i.ytimg.com/vi/38z-xuYhGnA/maxresdefault.jpg" },
  { title:"Daddy's Home", rating:"PG-13", desc:"A mild-mannered stepdad competes with his wife's freewheeling ex for the kids' affection.", link:"https://vidnest.fun/movie/274167", category:"Comedy", img:"https://www.informingbritain.com/uploads/2/3/0/7/23074706/aaaabeitwiuqjawyo7tinxjbss50awe0uz06yjiir3c35thjo5mw-q8pjx9dc-ulvrnu090zta6nqhwpyextcq7pyzesvg4m_orig.jpg" },
  { title:"Coco", rating:"PG", desc:"A journey through music and memory.", link:"https://gtic-home.short.gy/8zA1fM", category:"Family", img:"https://stanleymovietheater.com/wp-content/uploads/2020/10/Coco-Family-Poster-Pixar.jpg" },
  { title:"Cars 3", rating:"G", desc:"McQueen faces a new generation of racers.", link:"https://gtic-home.short.gy/T2sq4p", category:"Family", img:"https://thedisneydrivenlife.com/wp-content/uploads/2016/12/cars3internationalheader.jpg" },
  { title:"Cars 2", rating:"G", desc:"Mater gets caught in international espionage.", link:"https://gtic-home.short.gy/PFW9BQ", category:"Action", img:"https://wallpapers.com/images/hd/cars-2-movie-poster-yz8huh9xd0z74hx3.jpg" },
  { title:"Cars", rating:"G", desc:"A race car learns life is about the journey.", link:"https://gtic-home.short.gy/734Nd9", category:"Family", img:"https://files.ekmcdn.com/allwallpapers/images/cars-characters-61x91-5cm-disney-movie-poster-37932-1-p.jpg?v=1E386C7A-4150-42FA-9679-082254DCFE1C" },
  { title:"Captain Underpants", rating:"PG", desc:"Fourth-grade pranksters create a superhero.", link:"https://gtic-home.short.gy/U1HUbb", category:"Comedy", img:"https://pbs.twimg.com/media/GZtQF8WaAAEYFwZ.jpg:large" },
  { title:"Bring It On: Cheer or Die", rating:"PG-13", desc:"Horror spin on the cheerleading series.", link:"https://gtic-home.short.gy/KJBAeC", category:"Halloween", img:"https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F9%2Fgracenote%2F9b27249211b3c547cd67f8a67351f7cb.jpg" },
  { title:"Black Phone 2", rating:"R", desc:"The grabber returns.", link:"https://gtic-home.short.gy/ft5UYq", category:"Halloween", img:"https://attractionsmagazine.com/wp-content/uploads/2025/10/Black-Phone-2-Ethan-Hawke-Mason-Thames-courtesy-of-Universal.jpg" },
  { title:"A Minecraft Movie", rating:"PG", desc:"The sandbox world comes to life.", link:"https://gtic-home.short.gy/MUcD5Y", category:"Family", img:"https://uhsswordandshield.com/wp-content/uploads/2025/05/film_feature_minecraft-movie-poster.jpg" },
  { title:"A Charlie Brown Christmas", rating:"G", desc:"Classic holiday comfort.", link:"https://drive.google.com/file/d/1e2UIrJdsz_0k5tp2v0EnPZiPv2ZQSTzg/preview", category:"Christmas", img:"https://i.ebayimg.com/images/g/rRoAAOSwfERnGtix/s-l400.jpg" },
  { title:"Jackpot!", rating:"R", desc:"A lottery winner must survive until sundown as every loser in California tries to kill her to claim the prize.", link:"https://vidnest.fun/movie/1094138", category:"Comedy", img:"https://800poundgorillamedia.com/cdn/shop/articles/img-1719956011851.png?v=1719956811" },
  { title:"The Hunger Games", rating:"PG-13", desc:"Katniss volunteers to take her sister's place in a deadly televised fight-to-the-death competition.", link:"https://vidnest.fun/movie/70160", category:"Action", img:"https://static0.moviewebimages.com/wordpress/wp-content/uploads/2023/08/the-hunger-games.jpg", series:"The Hunger Games", order:1 },
  { title:"The Hunger Games: Catching Fire", rating:"PG-13", desc:"Katniss and Peeta are thrust back into the arena as the Capitol raises the stakes in the Quarter Quell.", link:"https://vidnest.fun/movie/101299", category:"Action", img:"https://ntvb.tmsimg.com/assets/p9364987_v_h8_af.jpg?w=960&h=540", series:"The Hunger Games", order:2 },
  { title:"The Hunger Games: Mockingjay Part 1", rating:"PG-13", desc:"Katniss becomes the symbol of rebellion as District 13 wages war against the Capitol.", link:"https://vidnest.fun/movie/131631", category:"Action", img:"https://ntvb.tmsimg.com/assets/p10318081_v_h8_ai.jpg?w=960&h=540", series:"The Hunger Games", order:3 },
  { title:"The Hunger Games: Mockingjay Part 2", rating:"PG-13", desc:"Katniss and her allies launch a final mission to assassinate President Snow and end the Capitol's reign.", link:"https://vidnest.fun/movie/131634", category:"Action", img:"https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/34/82/38/348238e7-1786-5d56-680d-09332ad5267a/1050259526-AU_NZ-AMP_SF.lsr/1200x675.jpg", series:"The Hunger Games", order:4 },
  { title:"The Hunger Games: Ballad of Songbirds & Snakes", rating:"PG-13", desc:"A young Coriolanus Snow mentors District 12's tribute Lucy Gray Baird 64 years before his tyrannical reign.", link:"https://vidnest.fun/movie/695721", category:"Action", img:"https://ntvb.tmsimg.com/assets/p22101560_v_h8_ao.jpg?w=960&h=540", series:"The Hunger Games", order:5 }
];

const shows = [
  { 
    title:"The Last of Us", rating:"TV-MA", desc:"Survivors navigate a fungal apocalypse.", category:"Drama", 
    img:"https://beam-images.warnermediacdn.com/2025-03/the-last-of-us-s2-og-image.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com",
    seasons:[
      { title:"Season 1", episodes:[
        {title:"Episode 1", link:"https://vidnest.fun/tv/100088/1/1"}, {title:"Episode 2", link:"https://vidnest.fun/tv/100088/1/2"},
        {title:"Episode 3", link:"https://vidnest.fun/tv/100088/1/3"}, {title:"Episode 4", link:"https://vidnest.fun/tv/100088/1/4"},
        {title:"Episode 5", link:"https://vidnest.fun/tv/100088/1/5"}, {title:"Episode 6", link:"https://vidnest.fun/tv/100088/1/6"},
        {title:"Episode 7", link:"https://vidnest.fun/tv/100088/1/7"}, {title:"Episode 8", link:"https://vidnest.fun/tv/100088/1/8"}, {title:"Episode 9", link:"https://vidnest.fun/tv/100088/1/9"}
      ]},
      { title:"Season 2", episodes:[
        {title:"Episode 1", link:"https://vidnest.fun/tv/100088/2/1"}, {title:"Episode 2", link:"https://vidnest.fun/tv/100088/2/2"},
        {title:"Episode 3", link:"https://vidnest.fun/tv/100088/2/3"}, {title:"Episode 4", link:"https://vidnest.fun/tv/100088/2/4"},
        {title:"Episode 5", link:"https://vidnest.fun/tv/100088/2/5"}, {title:"Episode 6", link:"https://vidnest.fun/tv/100088/2/6"}, {title:"Episode 7", link:"https://vidnest.fun/tv/100088/2/7"}
      ]}
    ]
  },
  { 
    title:"The Flash", rating:"TV-PG", desc:"Barry Allen becomes the fastest man alive.", category:"Action", 
    img:"https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/c83bc8d3-c134-4b41-b744-150010a68b7c/6d8331d3-dc28-4f57-987c-243b6ffe9d0c?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=500",
    seasons:[
      { title:"Season 1", episodes:[
        {title:"Episode 1", link:"https://vidnest.fun/tv/60735/1/1"}, {title:"Episode 2", link:"https://vidnest.fun/tv/60735/1/2"},
        {title:"Episode 3", link:"https://vidnest.fun/tv/60735/1/3"}, {title:"Episode 4", link:"https://vidnest.fun/tv/60735/1/4"},
        {title:"Episode 5", link:"https://vidnest.fun/tv/60735/1/5"}, {title:"Episode 6", link:"https://vidnest.fun/tv/60735/1/6"},
        {title:"Episode 7", link:"https://vidnest.fun/tv/60735/1/7"}, {title:"Episode 8", link:"https://vidnest.fun/tv/60735/1/8"}, {title:"Episode 9", link:"https://vidnest.fun/tv/60735/1/9"}
      ]}
    ]
  }
];

const sports = [
  {
    title: "WWE", rating: "SPORTS", desc: "Premium live events and weekly shows.", img: "https://insidepulse.com/wp-content/uploads/2017/12/WWE-logo-banner.jpg",
    events: [
      { title: "WrestleMania 41: Sat", rating: "LIVE", desc: "Night 1 of the Showcase of the Immortals.", img: "https://s.yimg.com/os/en/evening_standard_239/b76fc7a3e8f86308b5564787ce4f5329", link: "https://vidnest.fun/movie/1285198" },
      { title: "WrestleMania 41: Sun", rating: "LIVE", desc: "Night 2 of the Showcase of the Immortals.", img: "https://s.yimg.com/os/en/evening_standard_239/b76fc7a3e8f86308b5564787ce4f5329", link: "https://vidnest.fun/movie/1285199" }
    ]
  }
];
