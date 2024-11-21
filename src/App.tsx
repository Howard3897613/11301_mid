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
            <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
        </ul>
    </nav>

    <div id="main">

            <article className="post featured">
                <header className="major">
                    <span className="date">11月 2024</span>
                    <h2><a href="#">想不到這裡要寫甚麼</a></h2>
                    <p>很好玩！改我改我</p>
                </header>
                <a href="#" className="image main"><img src="images/pic01.png" alt="" /></a>
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
                    <a href="#" className="image fit"><img src="images/warframelarge.jpg" alt="" /></a>
                    <p>遊戲標籤：</p>
                    <p>#免費遊玩 #動作角色扮演 #刷寶射擊 #第三人稱射擊</p>
                    <ul className="actions special">
                        <li><a href="https://www.warframe.com/zh-hant" className="button">點我前往官網</a></li>
                    </ul>
                </article>
                <article>
                    <header>
                        <span className="date">09/19 2024</span>
                        <h2><a href="#">about.html<br />
                        作業2</a></h2>
                    </header>
                    <a href="#" className="image fit"><img src="images/pic03.png" alt="" /></a>
                    <p>作業內容：</p>
                    <p>運用 <a href="https://hackmd.io/@peiyucheng/rJtFyi62C" className="label">https://hackmd.io/@peiyucheng/rJtFyi62C</a> 內的14個標籤寫出介紹自己的頁面</p>
                    <ul className="actions special">
                        <li><a href="https://github.com/Howard3897613/113-1-TKU-WEB/blob/main/about.html" className="button">作業連結點我</a></li>
                    </ul>
                </article>
                <article>
                    <header>
                        <span className="date">09/26 2024</span>
                        <h2><a href="#">style.css<br />
                        作業4</a></h2>
                    </header>
                    <a href="#" className="image fit"><img src="images/pic04.png" alt="" /></a>
                    <p>作業內容：</p>
                    <p>傳 github repo 連結</p>
                    <ul className="actions special">
                        <li><a href="https://github.com/Howard3897613/113-1-TKU-WEB" className="button">作業連結點我</a></li>
                    </ul>
                </article>
                <article>
                    <header>
                        <span className="date">April 14, 2017</span>
                        <h2><a href="#">Tempus sed<br />
                        nulla imperdiet</a></h2>
                    </header>
                    <a href="#" className="image fit"><img src="images/pic05.jpg" alt="" /></a>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                    <ul className="actions special">
                        <li><a href="#" className="button">Full Story</a></li>
                    </ul>
                </article>
                <article>
                    <header>
                        <span className="date">April 11, 2017</span>
                        <h2><a href="#">Odio magna<br />
                        sed consectetur</a></h2>
                    </header>
                    <a href="#" className="image fit"><img src="images/pic06.jpg" alt="" /></a>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                    <ul className="actions special">
                        <li><a href="#" className="button">Full Story</a></li>
                    </ul>
                </article>
                <article>
                    <header>
                        <span className="date">April 7, 2017</span>
                        <h2><a href="#">Augue lorem<br />
                        primis vestibulum</a></h2>
                    </header>
                    <a href="#" className="image fit"><img src="images/pic07.jpg" alt="" /></a>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                    <ul className="actions special">
                        <li><a href="#" className="button">Full Story</a></li>
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
                <h3>Address</h3>
                <p>略略略<br />
                不告訴你</p>
            </section>
            <section>
                <h3>Phone</h3>
                <p><a href="#">0958479859</a></p>
            </section>
            <section>
                <h3>Email</h3>
                <p><a href="#">411630519@o365.tku.edu.tw</a></p>
            </section>
            <section>
                <h3>Social</h3>
                <ul className="icons alt">
                    <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
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
