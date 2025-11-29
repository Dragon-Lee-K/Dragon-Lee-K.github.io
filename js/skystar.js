// // 添加照片数组（替换为你的实际照片路径）
// var photos = [
//     'images/imag1.jpg',
//     'images/imag2.jpg',
//     'images/imag3.jpg',
//     'images/imag4.jpg',
//     'images/imag5.jpg',
//     'images/imag6.jpg',
//     // 添加更多照片路径...
// ];

// 自动生成图片路径数组
var photos = [];
var totalImages = 99; // 你的图片总数

for (let i = 1; i <= totalImages; i++) {
    photos.push(`images/image${i}.jpg`);
}

// 随机照片功能
function initPhotos() {
    let container = document.querySelector('.container');
    let activePhotos = [];
    const maxConcurrent = 7;

    function createRandomPhoto() {
        if (activePhotos.length >= maxConcurrent) {
            removeOldestPhoto();
        }
        
        let randomIndex = Math.floor(Math.random() * photos.length);
        let photoPath = photos[randomIndex];
        
        let photo_box = document.createElement('div');
        let photo = document.createElement('img');
        
        photo.src = photoPath;
        photo.alt = "美好回忆";
        
        // 图片尺寸和样式
        const imgWidth = randomNum(100, 180);
        Object.assign(photo.style, {
            width: imgWidth + 'px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            opacity: '0',
            transition: 'all 0.8s ease-in-out',
            transform: 'scale(0.9)'
        });
        
        // 修复：正确的全屏随机位置
        const position = calculateRandomPosition(imgWidth);
        Object.assign(photo_box.style, {
            position: 'fixed', // 改为 fixed 确保相对于视口定位
            top: position.top + 'px',
            left: position.left + 'px',
            zIndex: 1
        });
        // // 移除 z-index 设置，让 CSS 控制层级
        // Object.assign(photo_box.style, {
        //     position: 'fixed',
        //     top: randomNum(5, 85) + 'vh',
        //     left: randomNum(5, 85) + 'vw',
        //     transform: 'translate(-50%, -50%)'
        //     // 不再设置 z-index
        // });

        
        
        photo_box.appendChild(photo);
        container.appendChild(photo_box);
        activePhotos.push({
            element: photo_box,
            timestamp: Date.now()
        });
        
        // 快速淡入
        setTimeout(() => {
            photo.style.opacity = '0.9';
            photo.style.transform = 'scale(1)';
        }, 10);
        
        // 显示时间
        const displayTime = randomNum(3000, 4000);
        setTimeout(() => {
            fadeOutPhoto(photo_box);
        }, displayTime);
        
        // 下一张
        const nextDelay = randomNum(1000, 1500);
        setTimeout(createRandomPhoto, nextDelay);
    }
    
    // 修复：正确的全屏随机位置计算
    function calculateRandomPosition(imgWidth) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // 估算图片高度（假设宽高比约为 4:3）
        const imgHeight = (imgWidth * 0.75);
        
        // 计算可用的随机范围（确保图片完全在视口内）
        const maxLeft = viewportWidth - imgWidth - 10;  // 留出10px边距
        const maxTop = viewportHeight - imgHeight - 10; // 留出10px边距
        
        // 在全屏范围内随机位置
        const left = randomNum(-1050, 950);
        const top = randomNum(-330, 300);
        
        console.log(`图片位置: left=${left}, top=${top}, 视口: ${viewportWidth}x${viewportHeight}`); // 调试用
        
        return { left, top };
    }
    
    function fadeOutPhoto(photoBox) {
        let img = photoBox.querySelector('img');
        if (img) {
            img.style.opacity = '0';
            img.style.transform = 'scale(0.8)';
        }
        
        setTimeout(() => {
            if (photoBox.parentNode) {
                photoBox.parentNode.removeChild(photoBox);
                activePhotos = activePhotos.filter(p => p.element !== photoBox);
            }
        }, 800);
    }
    
    function removeOldestPhoto() {
        if (activePhotos.length > 0) {
            let oldest = activePhotos.reduce((prev, current) => 
                prev.timestamp < current.timestamp ? prev : current
            );
            fadeOutPhoto(oldest.element);
        }
    }
    
    // 立即启动
    createRandomPhoto();
    setTimeout(createRandomPhoto, 300);
    setTimeout(createRandomPhoto, 600);
}

// 确保randomNum返回整数
function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// poem
var words=[
    '伤心桥下春波绿',
    '曾是惊鸿照影来',
    '当年明月在',
    '曾照彩云归',
    '归去来兮',
    '真堪偕隐',
    '画船听雨眠',
    '愿为江水',
    '与君重逢',
    '一日不见兮',
    '思之若狂',
    '好想回到那个夏天',
    '趴在桌子上偷偷看你',
    '你曾是我灰色人生中的一道彩虹',
    '柳絮空缱绻',
    '南风知不知',
    '我见青山多妩媚',
    '料青山见我也应如是',
    '取次花丛懒回顾',
    '半缘修道半缘君',
    '三笑徒然当一痴',
    '人生若只如初见',
    '我余光中都是你',
    '人生自是有情痴',
    '此恨不关风与月',
    '因为你，我多少适应了这个世界',
    '春蚕到死丝方尽',
    '蜡炬成灰泪始干',
    '今夜何夕',
    '见此良人',
    '愿我如星君如月',
    '夜夜流光相皎洁',
    '情不所起',
    '一往而深',
    '玲珑骰子安红豆',
    '入骨相思知不知',
    '多情只有春庭月',
    '尤为离人照落花',
    '若有知音见采',
    '不辞唱遍阳春',
    '休言半纸无多重',
    '万斛离愁尽耐担',
    '夜月一帘幽梦',
    '和光同尘',
    '杳霭流玉',
    '月落星沉',
    '霞姿月韵',
    '喜上眉梢',
    '醉后不知天在水',
    '满船星梦压星河',
    '落花人独立',
    '微雨燕双飞',
    '掬水月在手',
    '弄花香满衣',
    '夜深忽梦少年事',
    '唯梦闲人不梦君',
    '垆边人似月',
    '皓腕凝霜雪',
    '众里嫣然通一顾',
    '人间颜色如尘土',
    '若非群玉山头见',
    '会向瑶台月下逢',
    '沉鱼落雁鸟惊喧',
    '羞花闭月花愁颤',
    '解释春风无限恨',
    '沉香亭北倚阑干',
    '夏日灿烂，愿你被这世界温柔以待',
    '夜空璀璨，祝你一路总有星辰相伴',
    '前路漫漫，许你初心不变仍是少年',
    '凌新萍，和你在一起是我最大的幸运'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();

    // 计算每个文字的垂直位置，确保均匀分布
    const verticalStep = 60 / words.length;

    words.forEach((w,index)=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'

        // // 添加竖排文字样式
        // word.style.writingMode = 'horizontal-lr'; // 竖排，从右往左
        // word.style.textOrientation = 'upright'; // 保持文字直立
        // word.style.letterSpacing = '10px'; // 字间距
        // word.style.lineHeight = '1.5'; // 行高

        word_box.classList.add('word-box');
        // word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-top", (verticalStep * index) + 'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(12,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
// window.addEventListener('load',init);
// 在页面加载时同时初始化文字和照片
window.addEventListener('load', function() {
    init(); // 你的原有文字初始化
    initPhotos(); // 新增加的照片初始化
});

let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '这片星空视频是我们的见证';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          textone.style.zIndex = '1000'; // 添加这行
          textone.style.position = 'relative'; // 确保 z-index 生效

        texttwo.innerHTML = '见证着我想把整个宇宙的浪漫都送给你的心意';
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textone.style.zIndex = '1000'; // 添加这行
          textone.style.position = 'relative'; // 确保 z-index 生效

        textthree.innerHTML = '而这首歌，在我每一个想你的白天，每一个想你的夜晚，都会轻轻响起';
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          textone.style.zIndex = '1000'; // 添加这行
          textone.style.position = 'relative'; // 确保 z-index 生效

        // 添加不换行样式
        [textone, texttwo, textthree].forEach(text => {
            text.style.whiteSpace = 'nowrap';
            text.style.overflow = 'hidden';
            text.style.textOverflow = 'ellipsis';
            text.style.fontSize = '22px'; // 根据需要调整
        });
          
          
      },20000)
      setTimeout(function(){
        textone.innerHTML = '也许我无法真的摘下星星送给你';
        texttwo.innerHTML = '但我想让你知道——在我的世界里，你比任何星辰都要耀眼';
        textthree.innerHTML = '哪里都是你，因为我的目光所及，心之所向，全都是你';

        // 添加不换行样式
        [textone, texttwo, textthree].forEach(text => {
            text.style.whiteSpace = 'nowrap';
            text.style.overflow = 'hidden';
            text.style.textOverflow = 'ellipsis';
            text.style.fontSize = '22px'; // 根据需要调整
        });
      },40000)


 
