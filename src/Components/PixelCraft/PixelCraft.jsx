import React from 'react';
import './PixelCraft.css'
import './01FirstSection.css';
import './02SecondSection.css';
import './03ThirdSection.css';
import './04ForthSection.css';
import './05FifthSection.css';
import './06SixthSection.css';
import './07SeventhSection.css';
import './08EightsSection.css';
import './09NinthSection.css';
import './10TenthSection.css';
import './11EleventhSection.css';
import './12TwelveSection.css';
import './13ThirteenSection.css';
import './14ForteenSection.css';
import { FaInstagram, FaTelegram } from "react-icons/fa6";

const PixelCraft = () => {
  return (
    <div>
      

        <section className='first-section'>
            <div className='first-section-text'>

            <h1 className='first-h1'>РАЗРАБОТКА</h1><h1 className='first-h1-2'>ВЕБ-СЕРВИСОВ</h1><h1 className='first-h1-3'>С  ГАРАНТИЯМИ</h1>
            <div>
            <p>Проектирование ⠀ Дизайн Менеджмент⠀ Вёрстка <br></br>  Тестирование⠀ Бизнес-аналитика ⠀ Креатив</p>
            </div>
            </div>
       <img src='First-section.png' />
        </section>
        <section className='second-section' id='about'>
        <h1 className='second-main'>Сколько стоит проект?</h1>
        <div className='second-border'></div>
        <div className='second-p'>
        <p>В Пиксель мы стараемся делать лучше и дороже всех. Ваш проект пройдёт все </p>
        <p>этапы - от моделирования идей, ТЗ и дизайна, до программирования и запуска. </p>
        <p className='second-p-2'>Мы даём гарантии на свою работу - планирование бюджета проходит после </p>
        <p className='second-p-4'> подробных консультаций по видео-связи. С Вами свяжется менеджер </p>
        <p className='second-p-3'>проекта.</p>
        </div>
            <div className='second-sums'>
        <h1>⠀</h1>
            <div className='second-border-2'></div>
        </div>
        <div className='second-p-5'>
        <p>лет мы проектируем и программируем <br></br> исключительно индивидуальные системы <br></br> для организаций.</p>
        <p>pixel/craft -  эффективный ИТ отдел для <br></br> проектов в Вашей компании</p>
        <p>Наша задача - организованное повышение <br></br> годовой прибыли фирмы клиента.</p>
        </div>
        <h2 className='second-10'>10</h2>
        <div>
        <div className='second-border-3'></div>
        <div className='second-p-6'>
            <p>лет мы разрабатываем и ведём проектный <br></br> менеджмент эффективных веб приложений <br></br> для стартапов.</p>
            <p>PixelCraft - надёжный ИТ партнёр <br></br> для воплощения Ваших идей.</p>
            <p>Создаём команду, ТЗ, прототип и MVP, <br></br> помогаем окупить вложения.</p>
        <h2 className='second-6'>6</h2>
        </div>
            
        </div>
        </section>
        <section className='third-section'>
        
        </section>
        
        <section className='fifth-section' id='otzyvy'>
          <div className='otzyvy-all'>
          <div>

            <h1>Отзывы</h1>
            <div className='starts-1'>

            <div>

           <img className='avatar-1' src='fifth-section-avatar.png' />
            </div>
            <div>
            <p className='fifth-ps'>.</p>
           <p className='fifth-niks'>@artemsaledev</p>
            </div>
            {/* <div>
            
           <img className='stars' src='fifth-section-star.png' />
           <img className='stars' src='fifth-section-star.png' />
           <img className='stars' src='fifth-section-star.png' />
           <img className='stars' src='fifth-section-star.png' />
           <img className='stars' src='fifth-section-star.png' />
            </div> */}
            </div>
           <p  className='vlad-otzyvy'>Находясь в топ-5 программистов Кыргызстана, использующих Python и Django, <br></br> Олег строит многофункциональные приложения на любом <br></br> стеке технологий, предоставляя доступные внутреннему рынку<br></br> комплексные услуги с надёжной защитой интересов бизнеса.<br></br> Не приемлете решений "из коробки" и цените данные ваших <br></br>предприятий? Понимаете, что именно Ваш бизнес, <br></br> по настоящему уникален в отрасли - тогда смело обращайтесь <br></br>за бесплатной консультацией к Мухаммеду!</p>
          </div>
          <div className='otzyvy-container-2'>
        <div className='starts-2'>

        <div>

        <img className='freelance-1' src='fifth-section-freelance.png' />
        <img className='avatar-2' src='fifth-section-avatar.png' />
        </div>
        <div>
        <p className='fifth-ps'>.</p>
        <p className='fifth-niks-2'>@vlad_zernytsky-</p>
        
        </div>
        {/* <div>

           <img className='stars' src='fifth-section-star.png' />
           <img className='stars-2' src='fifth-section-star.png' />
           <img className='stars-3' src='fifth-section-star.png' />
           <img className='stars-4' src='fifth-section-star.png' />
           <img className='stars-5' src='fifth-section-star.png' />
        </div> */}
        </div>
        <p className='vlad-otzyvy'>Я обратился к Мухаммеду Абдиеву и его команде потому, что <br></br> наслышан о качественной, глубокой и ответственной работе,<br></br> которую они выполняют в своей области. Хочу сказать спасибо <br></br>командеи ее лидеру Олегу за проделанную работу. Работа<br></br> выполнена быстро и точно, а главное — мы добились своей <br></br>цели, и советы, полученные от него, пришлись к месту<br></br> идеально. Профессионалы, ответственные и очень<br></br> перспективные ребята! Рекомендую!!!</p>
          </div>
          </div>
        </section>
        <section className='sixth-section' id='projects'>
            <h1>Наши проекты</h1>
            <div className='project-photos'>
            <img className='sixth-1' src='sixth-section-first-project.png' />

            <img className='sixth-2' src='sixth-section-second-project.png' />

            <img className='sixth-3' src='sixth-section-third-project.png' />
            </div>
        </section>
        <section className='seventh-section'>
            <div className='seventh-container'>
            <h1>ТОП-5 ваших лучших вопросов:</h1>
            <details>
                <summary>Какие гарантии успешной реализации проекта?</summary>
                <article>
                     <p>Мы даём гарантии, которые официально прописаны — на уровне договора. <br></br>Сам договор часто индивидуально редактируется, но по стандарту вы имеете следующие гарантии: <br></br><strong>Гарантии возврата средств </strong>при некорректном выполнении проекта. <br></br> <strong>Гарантии без предоплат. </strong> В дополнение для 100% безопасности мы можем работать через <br></br> специальный сервис с третьим лицом и внутренней независимой судебной комиссией. Это <br></br> добавляет 10% к бюджету. <br></br> <strong>Гарантии качества. </strong>Мы прописываем специально дополнение к договору, которое рассказывает <br></br>о том, какие необходимы нефункциональные требования (требования к нагрузкам, скорости, <br></br> документации, стандартам и т.д.). <br></br><strong>Гарантии исправности. </strong> После того, как проект сдан, мы гарантируем устранение неполадок в <br></br> кратчайшие сроки. <br></br><strong>Гарантии бонусов.</strong> Независимо от проекта и его сложности мы гарантируем, что сделаем больше, <br></br> чем в договоре и ТЗ. Никто не уйдет без подарков! <br></br>Примеры договора смотрите на сайте (ниже).</p>
                </article>
            </details>
            <details>
                <summary>Все ли проекты pixel/craft успешны?</summary>
                <article>
                <p>Нет, но в последние 7 лет разработка программ и процессов становится для нас всё более интересной <br></br> и масштабной, но в то же время более предсказуемой, более безопасной - так как мы отладили наши <br></br> процессы и снабдили необходимыми компетенциями - аналитика, дизайн, менеджмент, прототипиро-<br></br>вание, программирование, тестирование и внедрение. За это мы благодарны всем более ранним про-<br></br>ектам, в которых у нас не хватало опыта, чтобы обеспечить весь необходимый проекту комплекс <br></br> услуг, специалистов, наработок и консультаций (мы начинали давно, с простого программирования <br></br>без менеджмента и проектирования архитектуры).</p>
                <p>Сейчас, благодаря проектам, мы  <strong>имеем опыт в десятках бизнес областей: </strong> склад, бухгалтерия, <br></br> найм кадров, многопрофильные мед учреждения, ремонт авто, ремонт квартир, управляющие компа-<br></br>нии, одежда, БУ авто, измерительные приборы, образование, маркетплейсы, роботизация, франшизы, <br></br>спорт, тренировки и питание, азартные и многопользовательские игры, туризм, бронирование, бло-<br></br>гинг, мебельная пром., стоматология, недвижимость, криптовалюты, металлургия, товарный бизнес, <br></br> маркетинговые агентства, рекламные платформы, криптография, государственные базы, b2b, b2c на <br></br> amazon и т.д.</p>
                <p>Опыт с различными интересными и уникальными предпринимателями, с разными приложениями и <br></br> со множеством современных технологий позволяет нам производить новые проекты, стартапы и <br></br> даже целые компании с максимальной минимизацией рисков.</p>
                </article>
            </details>
            <details>
                <summary>Почему разработка приложений - не дешевое удовольствие?</summary>
                <article>
                <p>Мы росли постепенно, и, какие бы прайсы мы не выставляли на сайтах и в коммерческих, этот вопрос <br></br>всегда присутствовал. И ответ всегда был примерно такой: <strong> “потому что есть спрос”. </strong> Спрос на инди-<br></br>видуальные сложные услуги и хороший сервис есть всегда.</p>
                 <p>Однако позже мы стали разбираться — <strong> а что же такое “дорого”?</strong> На наш взгляд, дорого — это <br></br> оценка не суммы в деньгах, а общего результата. Если результат не принес вам ничего, а только <br></br> забрал время и деньги, <strong>тогда любая сумма может быть “дорого”.</strong> Даже если с вас не взяли ни <br></br> копейки, но потратили время зря, — это “дорого”. Но, сколько бы вы не заплатили за проект, если он принес вам клиентов, продажи, повышение среднего чека или квартальной выручки, лояльность пользователей, инвестора и плюс к этому банально опыт, хорошее настроение и незабываемо проведенное время разве это дорого?</p>
                 <p>Мы работаем по <strong>  рыночным ценам.</strong> Раньше людям было сложно смириться, что они <strong> покупают <br></br> “воздух”. </strong>  Сейчас нет сомнений: данные — это новое золото, информационные технологии — это <br></br> непаханное поле возможностей, в этом мире мы больше НЕ автоматизиро-<br></br>вали, чем автоматизировали, если вашего бизнеса нет в интернете, то вас нет в бизнесе, и, следовательно, если вы хорошо <br></br> обустроены в интернете, вам комфортно в бизнесе. Это цитаты самых опытных наших с вами совре-<br></br>менников. И после 2020 не остается сомнений в том, что современное IT — всего лишь начало вели-<br></br>кого будущего и закупаться “воздухом” нужно капитально, ведь без воздуха бизнесу не выжить.</p>
                </article>
            </details>
            <details>
                <summary>Вы IT компания? Чем Вы отличаетесь от других IT компаний?</summary>
                <article>
                <p>Сложно сказать, к какой форме организации относится всё “PixelCraft”, т.к. наши направления очень раз-<br></br>ные, а глобальные планы беспрецедентны. Потому оценим только подразделение разработки <br></br>—<strong> pixel/craft.</strong> Можно с уверенностью сказать, что несмотря на то, что мы сидим в офисе и у нас<br></br> свои законы, регламенты, несмотря на сложный менеджмент и системный подход, несмотря на всё<br></br> это, сотрудничество с нами не похоже на сотрудничество с компанией. Мы организуем <br></br> <strong> небольшие</strong> команды специалистов, мощности, производительность и креативность которых рабо-<br></br>тают на наших клиентов сфокусированно, и это  всегда  компактные и самостоятельные команды  <strong>без <br></br> лишней бюрократии </strong>  и с простой, <strong> прозрачной отчетностью.</strong></p>
            <p>Чаще всего нас сравнивают с большими компаниями, хотя под проект мы предоставляем команды <br></br>без избыточных ролей (5—7 человек максимум). Если вы инвестор, рассматриваете возможность вло-<br></br>жения в проект с минимальным участием, хотите супер-комплексные услуги от продвижения и марке-<br></br>тинга до менеджмента соцсетей и бухгалтерских услуг, то, пожалуй, опытные крупные компании — <br></br>это единственный, кто вам поможет определить ваш бюджет. У них достаточно ресурсов.</p>
            <p>Однако, если вы лично принимаете решения о развитии вашей компании или стартапа, если вам <br></br> нужен индивидуальный подход, если вы хотите не только инвестировать, но и понимать, а может, и <br></br>принимать активное участие со своими сотрудниками в проекте, тогда добро пожаловать. Наша<br></br> команда постарается оказаться лучшим выбором для вас и ваших целей.</p>
                </article>
            </details>
            <details>
                <summary>Почему вы дороже фрилансеров?</summary>
                <article>
                <p>Мы любим и ценим фриланс и многое (хорошее) переняли от этого свободного и самостоятельного <br></br>стиля. Мы стараемся обеспечить самые комфортные и творческие условия для наших сотрудников,<br></br> однако, конечно же, у нас есть и справедливые ограничения, которые гарантируют выполнение задач <br></br>для клиента.</p>
            <p>Говоря о цене, кажется, будто мы на порядок дороже, чем фрилансер-одиночка, который “сделает всё <br></br>сам”. Определенно, истории известны гении-одиночки, но в общем случае для современного проекта<br></br> вам необходима команда специалистов. Вы можете самостоятельно нанять и управлять командой из <br></br> десятка фрилансеров. Однако, как показывает практика, ни быстрее, ни дешевле в этом случае не<br></br> получается, да и редко что-то получается в итоге вообще, ведь, чтобы быть дешевле всех, фрилансеру<br></br> просто необходимо отказаться от всех хороших практик программирования, проектирования, доку-<br></br>ментирования, безопасности и так далее. Лишь бы было “по букве ТЗ”.</p>
            <p>У нас отлажены все необходимые процессы и есть огромная база активно используемых наработок,<br></br> которая обновляется каждый день. И в сумме, на наш скромный взгляд, при прочих равных услугах,<br></br> процессах и стандартах, услуги организованной команды могут оказаться удобнее и дешевле, чем <br></br>самостоятельная организация всех процессов.</p>
            <p>Но для честности нужно отметить: в каком-то смысле мы и сами фрилансеры, ведь периодически <br></br>работаем на бирже и имеем топовый рейтинг в нескольких категориях, ставим местные рекорды, о <br></br>нас пишут статьи, берут интервью и записывают подкасты. Мы часто создаём простые проекты на,<br></br> фрилансе (в основном для внутренних нужд компании) и люди, поработавшие с нами, обучаются<br></br> нашим стандартам и подходам, а мы узнаём новое от них, что вносит вклад как во фриланс, так и в<br></br> рынок технологий в целом.</p>
                </article>
            </details>
            
            </div>
        </section>
        <section className='eights-section'>
            <img src='eights-section-photo2.png' />

            <h2>Наша миссия на 10 лет</h2>
            <div className='button'></div>
            <p>Поднять уровень качества жизнедеятельности людей <br></br> и доступности ресурса путём массовой автоматизации<br></br> рутинных и не творческих процессов.</p>
            <p>Так много еще не запрограммировано...</p>
        </section>
        <section className='ninth-section'>
            <h1>Бесплатная оценка проекта</h1>
            <div className='ninth-section-space'>
                <div>
            <img src='ninth-section-photo.webp' />
                </div>
                <div className='ninth-p'>
            <p>С Вами будет общаться 2 человека.</p>
            <p>Специалист по управлению проектами и эксперт по про-<br></br>ектированию бизнес-систем — менеджер проекта и <br></br>архитектор.</p>
            <p>На основе опроса старший менеджер подготавливает<br></br> пункты, которые необходимо согласовать до того, как<br></br> ваши задачи можно будет оценить.</p>
            <p>С вами свяжется системный архитектор, который сможет<br></br> ответить на все интересующие вас технические вопросы,<br></br> касающиеся проекта.</p>
            <p>Вы сможете обсудить задачу или идею во всех необходи-<br></br>мых деталях, после чего мы подготовим несколько вари-<br></br>антов реализации.</p>
                </div>
            </div>
        </section>
        <section className='tenth-section'>
            <h1>Какие документы мы предоставляем</h1>
            <div className='tenth-container'>
                <div className='tenth-container-2'>
                    <img className='papka-1' src='papka-tenth.png' />
            <div className='tenth-1'></div>
            <h2 className='ten-p'>Договор с <br></br>гарантиями</h2>
                </div>
                <div className='tenth-container-3'>
                
                    <img className='papka-2' src='papka-tenth.png' />
            <div className='tenth-2'></div>
            <h2 className='tenth-sxema'>Схема архитектуры</h2>
                </div>
                <div className='tenth-container-4'>
                    <img className='papka-3' src='papka-tenth.png' />
            <div className='tenth-3'></div>
                
            <h2 className='text-kvartal'>Квартальный отчёт</h2>
                </div>
                <div className='tenth-container-5'>
                    <img className='papka-4' src='papka-tenth.png' />
            <div className='tenth-4'></div>

            <h2>Модель<br></br> предметной<br></br> области</h2>
                </div>
                <div className='tenth-container-6'>
                    <img className='papka-5' src='papka-tenth.png' />
            <div className='tenth-5'></div>

            <h2>Техническое <br></br> задание</h2>
                </div>
                <div className='tenth-container-7'>

                    <img className='papka-6' src='papka-tenth.png' />
            <div className='tenth-6'></div>
            <h2 className='tenth-example'>Пример прототипа</h2>
                </div>
            </div>
        </section>
        <section className='eleventh-section'>
            <h1>Про основателя</h1>
            <div className='container-eleventh'>
            <div>
            <img className='eleventh-section-photo' src='Mukhammed.PNG' />
            </div>
            <div className='right-section'>
                <div className='portfolio-eleventh'>
                    
                    <div>
                    <img className='eleventh-section-portfolio' src='eleventh-section-portfolio2.PNG' />
                    </div>
                    <div>
                    <h2>Мухаммед Абдиев</h2>
                    <p>Веб разработчик и дизайнер</p>
                    <p>Программист с 1.5 годами опыта</p>
                    </div>
                </div>
                    <div className='eleventh-section--first-icons'>
                      <div className='eleventh-section-all'>

                    <div>
                      {/* <img src='eleventh-section-icon.PNG' /> */}
                    </div>
                    <div>
                    <h3>Опыт программирования 1.5 года</h3>
                    <p>Я работаю над проектами в сфере веб-разработки и <br></br> постоянно учусь новым технологиям.</p>
                    </div>
                    </div>
                    <div>
                    <div>
                      {/* <img src='eleventh-section-icon-2.PNG' /> */}
                    </div>
                    <div>
                    <h3>Моя цель</h3>
                    <p>Развивать свои навыки в области IT и в будущем заниматься <br></br>разработкой искусственного интеллекта, чтобы создать<br></br> инновационные решения, которые облегчат жизнь людям.</p>
                    <p>Развивать IT-сферу в нашей стране и привлечь в Кыргызстан <br></br> крупные IT-компании, чтобы наша страна ассоциировалась <br></br>у людей с новыми технологиями. </p>
                    </div>
                    </div>
                
                    <div>
                    <h3>Мои навыки и технологии</h3>
                    <p>Я владею HTML, CSS, JavaScript, React, а также изучаю <br></br> Python, Django и работу с базами данных. Знаком с инструментами<br></br> Figma для дизайна и GitHub для совместной работы <br></br> с командой</p>
                    </div>
                
                    <div>
                    <h3>Мой путь в IT</h3>
                    <p>4 месяцев углубленно изучаю веб-разработку</p>
                    <p>5+ завершенных проекта</p>
                    <p>5 новых технологий освоено за последний год</p>
                    <p>Моя цитата: "Упорный всегда обгонит одаренного"</p>
                    </div>
                     </div>
                 </div> 
                      </div>
        </section>
        {/* <section className='twelve-section'>
        <h1>Наши технологии:</h1>
        <img src='JavaScript.png' />
        <img src='HTML, CSS.png' />
        <img src='Git.png' />
        <img src='React.png' />
        </section>
        <section className='thirteen-section' id='partners'>
            <h1>Наши клиенты и партнёры</h1>
            <img src='BitBucket.png' />
            <img src='Paypal.png' />
            <img src='Taxer.png' />
            <img src='Freelance.png' />
        </section> */}
        <section className='forteen-section'>
            <h1>Мы готовы начать. А Вы?</h1>
            <button onClick={() => window.open('https://t.me/pixelcraft_me', '_blank')}>Обсудить проект</button>
        </section>
        <section className='fifteen-section'>
            <video></video>
        </section>
        <footer id='contacty'>
            <h1>Свяжитесь с нами</h1>
            <p>Мы открыты к новым сотрудничествам!</p>
            <div className='footer-insta'>

            <a href='https://www.instagram.com/abdievs.3/' target='blank'><FaInstagram className='footer-insta'/></a>
            <a href='
            ' target='blank'><FaTelegram className='footer-telega'/></a>
            </div>
        </footer>
    </div>
  );
};

export default PixelCraft;