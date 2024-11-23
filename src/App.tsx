import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../public/assets/css/main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="wrapper" className="fade-in">

    <div id="intro">
        <p>113-1 網路程式設計 期中專題<br /></p>
        <h1>遊戲清單</h1>
        <p>林峰彬、陳庭浩、廖則宇 共同製作<br /></p>
        <ul className="actions">
            <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
        </ul>
    </div>

    <header id="header">
        <a href="index.html" className="logo">遊戲清單</a>
    </header>

    <nav id="nav">
        <ul className="links">
            <li className="active"><a href="index.html">遊戲列表</a></li>
            <li><a href="https://www.youtube.com/">點我開啟YT</a></li>
            <li><a href="https://www.twitch.tv/">點我開啟圖奇</a></li>
        </ul>
        <ul className="icons">
            <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/Howard3897613/11301_mid" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
        </ul>
    </nav>

    <div id="main">

            <article className="post featured">
                <header className="major">
                    <span className="date">11月 2024</span>
                    <h2><a href="#">熱門遊戲推薦</a></h2>
                    <p>(Steam平台優先)</p>
                </header>
                <a href="#" className="image main"><img src="images/titile.jpg" alt="" /></a>
                <ul className="actions special">
                    <li><a href="#" className="button large">Full Story</a></li>
                </ul>
            </article>

            <section className="posts">
                <article>
                    <header>
                        <span className="date">第三人稱射擊</span>
                        <a href="#" className="image left"><img src="images/warframe.webp" alt="" /></a><br />
                        <h2><a href="#">Warframe<br />
                        戰甲神兵</a></h2>
                    </header>
                    <a href="#" className="image fit"><img src="images/warframe-metacard.png" alt="" /></a>
                    <p>遊戲標籤：</p>
                    <p>#免費遊玩 #動作角色扮演 #刷寶射擊 #第三人稱射擊</p>
                    <ul className="actions special">
                        <li><a href="https://www.warframe.com/zh-hant" className="button">點我前往官網</a></li>
                    </ul>
                </article>
                
                <article>
                    <header>
                        <span className="date">MOBA+吃雞</span>
                        <a href="#" className="image left"><img src="images/Eternal.webp" alt="" /></a><br />
                        <h2><a href="#">Eternal Return<br />
                        永恆輪迴</a></h2>
                    </header>
                    <a href="#" className="image fit"><img src="images/Season3Et.webp" alt="" /></a>
                    <p>遊戲標籤：</p>
                    <p>#免費遊玩 #日本動畫 #多人線上戰術競技 #多人</p>
                    <ul className="actions special">
                        <li><a href="https://playeternalreturn.com/main?hl=zh-TW" className="button">點我前往官網</a></li>
                    </ul>
                </article>
              <article>
                    <header>
                        <span className="date">音樂節奏遊戲</span>
                        <a href="#" className="image left"><img src="images/logo.png" alt="" /></a><br />
                        <h2><a href="#">mush dash<br />
                        喵斯快跑</a></h2>
                    </header>
                    <a href="#" className="image fit"><img src="images/musedash.jpg" alt="" /></a>
                    <p>遊戲標籤：</p>
                    <p>#付費遊玩 #音樂節奏遊戲 #單人</p>
                    <ul className="actions special">
                        <li><a href="https://musedash.peropero.net/#/version" className="button">點我前往官網</a></li>
                    </ul>
                </article>
                <article>
                    <header>
                        <span className="date">戰術競技遊戲</span>
                        <a href="#" className="image left"><img src="images/apexlogo.png" alt="" /></a><br />
                        <h2><a href="#">Apex legends<br />
                        Apex英雄</a></h2>
                    </header>
                    <a href="#" className="image fit"><img src="images/apex legends.jpg" alt="" /></a>
                    <p>遊戲標籤：</p>
                    <p>#免費遊玩 #射擊 #多人 #第一人稱 #大逃殺</p>
                    <ul className="actions special">
                        <li><a href="https://www.ea.com/zh-tw/games/apex-legends/about" className="button">點我前往官網</a></li>
                    </ul>
                </article>
                <article>
                    <header>
                        <span className="date">沙盒遊戲</span>
                        <a href="#" className="image left"><img src="images/terrarialogo.png" alt="" /></a><br />
                        <h2><a href="#">Terraria<br />
                        泰拉瑞雅</a></h2>
                    </header>
                    <a href="#" className="image fit"><img src="images/terraria.jpg" alt="" /></a>
                    <p>遊戲標籤：</p>
                    <p>#付費遊玩 #2d沙盒 #生存 #多人 #冒險</p>
                    <ul className="actions special">
                        <li><a href="https://www.terraria.org/" className="button">點我前往官網</a></li>
                    </ul>
                </article>
                <article>
                    <header>
                        <span className="date">動作角色扮演遊戲</span>
                        <a href="#" className="image left"><img src="images/monsterlogo.jpg" alt="" /></a><br />
                        <h2><a href="#">Monster hunter rise<br />
                        魔物獵人崛起</a></h2>
                    </header>
                    <a href="#" className="image fit"><img src="images/monster hunter rise.png" alt="" /></a>
                    <p>遊戲標籤：</p>
                    <p>#付費遊玩 #動作 #角色扮演 #線上合作 #多人</p>
                    <ul className="actions special">
                        <li><a href="https://www.monsterhunter.com/rise/hk/" className="button">點我前往官網</a></li>
                    </ul>
                </article>
              <article>
                    <header>
                        <span className="date">生存恐怖遊戲</span>
                        <a href="#" className="image left"><img src="images/lethal-logo.jpg" alt="" /></a><br />
                        <h2><a href="#">lethal company<br />
                        </a></h2>
                    </header>
                    <a href="#" className="image fit"><img src="images/lethal company.jpg" alt="" /></a>
                    <p>遊戲標籤：</p>
                    <p>#付費遊玩 #付費遊玩 #線上合作 #第一視角 #生存 #恐怖 #多人</p>
                    <ul className="actions special">
                        <li><a href="https://store.steampowered.com/app/1966720/Lethal_Company/" className="button">點我前往官網</a></li>
                    </ul>
                </article>
                <article>
                    <header>
                        <span className="date">格鬥遊戲</span>
                        <a href="#" className="image left"><img src="images/streetlogo.png" alt="" /></a><br />
                        <h2><a href="#">Street fighter 6<br />
                        快打旋風6</a></h2>
                    </header>
                    <a href="#" className="image fit"><img src="images/street fighter.jpg" alt="" /></a>
                    <p>遊戲標籤：</p>
                    <p>#付費遊玩 #付費遊玩 #動作 #多人 #2D格鬥</p>
                    <ul className="actions special">
                        <li><a href="https://www.streetfighter.com/6/zh-hant" className="button">點我前往官網</a></li>
                    </ul>
                </article>
            </section>

            <footer>
                <div className="pagination">
                    <a href="#" className="page active">1</a>
                    <a href="#" className="page">2</a>
                    <a href="#" className="page">3</a>
                    <span className="extra">&hellip;</span>
                    <a href="#" className="page">8</a>
                    <a href="#" className="page">9</a>
                    <a href="#" className="page">10</a>
                    <a href="#" className="next">Next</a>
                </div>
            </footer>

    </div>

    <footer id="footer">
        <section>
            <form method="post" action="#">
                <div className="fields">
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows={3}></textarea>
                    </div>
                </div>
                <ul className="actions">
                    <li><input type="submit" value="Send Message" /></li>
                </ul>
            </form>
        </section>
        <section className="split contact">
            <section className="alt">
                <h3>學期</h3>
                <p>113學年度<br/> 
                第一學期</p>
            </section>
            <section>
                <h3>組員姓名</h3>
                <p><a href="#">411630279 林峰彬</a><br/>
                <a href="#">411630519 陳庭浩</a><br/>
                <a href="#">411630543 廖則宇</a></p>
            </section>
            <section>
                <h3>Email</h3>
                <p><a href="#">411630279@o365.tku.edu.tw</a><br/>
                <a href="#">411630519@o365.tku.edu.tw</a><br/>
                <a href="#">411630543@o365.tku.edu.tw</a></p>
            </section>
            <section>
                <h3>專案連結</h3>
                <ul className="icons alt">
                    <li><a href="https://github.com/Howard3897613/11301_mid" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
                </ul>
            </section>
        </section>
    </footer>

    <div id="copyright">
        <ul><li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
    </div>

</div>

<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/jquery.scrollex.min.js"></script>
<script src="assets/js/jquery.scrolly.min.js"></script>
<script src="assets/js/browser.min.js"></script>
<script src="assets/js/breakpoints.min.js"></script>
<script src="assets/js/util.js"></script>
<script src="assets/js/main.js"></script>
        
    
      
        
    
    </>
  )
}

export default App
