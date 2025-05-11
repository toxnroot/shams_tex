// pages/about.js
"use client";
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import  './about.css'; // تأكد من إنشاء هذا الملف

export default function About() {
  // إضافة تأثير عند التمرير للصفحة
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fadeIn');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // تنفيذ مرة عند التحميل
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="aboutContainer">
      <Head>
        <title>من نحن | شمس تكس - رواد صناعة الأقمشة في مصر</title>
        <meta name="description" content="تعرف على شركة شمس تكس الرائدة في مجال صناعة وتوريد الأقمشة بأعلى جودة في القاهرة ومصر" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="hero">
        <div className="overlay"></div>
        <div className="heroContent">
          <h1>شركة شمس تكس</h1>
          <p>رواد صناعة الأقمشة في مصر</p>
        </div>
      </header>

      <main>
        <section className="section fadeIn" id="about">
          <div className="container">
            <h2>من نحن</h2>
            <div className="aboutGrid">
              <div className="aboutText">
                <p>
                  تأسست شركة شمس تكس في قلب القاهرة منذ أكثر من 20 عاماً بهدف تقديم أجود أنواع الأقمشة بمعايير عالمية. 
                  نفخر بكوننا واحدة من أبرز الشركات في مجال صناعة وتوريد الأقمشة في السوق المصري والشرق الأوسط.
                </p>
                <p>
                  تتميز منتجاتنا بالجودة العالية والتنوع الذي يلبي احتياجات السوق المحلي والعالمي، 
                  مع التزامنا الدائم بمواكبة أحدث التقنيات والتصميمات في عالم النسيج.
                </p>
              </div>
              <div className="aboutImage">
                <div className="imageWrapper overflow-hidden rounded-lg shadow-lg">
                  <Image 
                    src="/about.jpg" 
                    alt="مصنع شمس تكس" 
                    width={600} 
                    height={400} 
                    layout="responsive" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section fadeIn" id="vision">
          <div className="container">
            <div className="visionMission">
              <div className="visionBox">
                <h3>رؤيتنا</h3>
                <p>
                  أن نكون الخيار الأول والأفضل في مجال صناعة الأقمشة محلياً وإقليمياً، 
                  مع الالتزام بأعلى معايير الجودة والابتكار المستمر.
                </p>
              </div>
              <div className="missionBox">
                <h3>رسالتنا</h3>
                <p>
                  تقديم منتجات نسيجية مبتكرة وعالية الجودة تلبي احتياجات عملائنا وتتجاوز توقعاتهم، 
                  مع الحفاظ على قيم الاستدامة والمسؤولية الاجتماعية.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section fadeIn" id="values">
          <div className="container">
            <h2>قيمنا</h2>
            <div className="valuesGrid">
              <div className="valueCard">
                <div className="valueIcon">
                  <i className="quality-icon"></i>
                </div>
                <h3>الجودة</h3>
                <p>نلتزم بتقديم أعلى معايير الجودة في جميع منتجاتنا</p>
              </div>
              <div className="valueCard">
                <div className="valueIcon">
                  <i className="innovation-icon"></i>
                </div>
                <h3>الابتكار</h3>
                <p>نسعى دائماً للتطوير والابتكار في تقنيات وتصميمات النسيج</p>
              </div>
              <div className="valueCard">
                <div className="valueIcon">
                  <i className="integrity-icon"></i>
                </div>
                <h3>النزاهة</h3>
                <p>نؤمن بالشفافية والأمانة في جميع تعاملاتنا</p>
              </div>
              <div className="valueCard">
                <div className="valueIcon">
                  <i className="sustainability-icon"></i>
                </div>
                <h3>الاستدامة</h3>
                <p>نلتزم بممارسات صديقة للبيئة في جميع عملياتنا</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section fadeIn" id="products">
          <div className="container">
            <h2>منتجاتنا</h2>
            <div className="productsGrid">
              <div className="productCard">
                <div className="productImage">
                  <Image src="/api/placeholder/300/300" alt="أقمشة قطنية" width={300} height={300} />
                </div>
                <h3>أقمشة قطنية</h3>
                <p>مجموعة متنوعة من الأقمشة القطنية عالية الجودة</p>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <Image src="/api/placeholder/300/300" alt="أقمشة حريرية" width={300} height={300} />
                </div>
                <h3>أقمشة حريرية</h3>
                <p>تشكيلة فاخرة من الأقمشة الحريرية بتصميمات عصرية</p>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <Image src="/api/placeholder/300/300" alt="أقمشة المفروشات" width={300} height={300} />
                </div>
                <h3>أقمشة المفروشات</h3>
                <p>خيارات متعددة من أقمشة المفروشات العالية الجودة</p>
              </div>
              <div className="productCard">
                <div className="productImage">
                  <Image src="/api/placeholder/300/300" alt="أقمشة تقنية" width={300} height={300} />
                </div>
                <h3>أقمشة تقنية</h3>
                <p>أقمشة مبتكرة للاستخدامات الصناعية والتقنية</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section contactSection fadeIn" id="contact">
          <div className="container">
            <h2>تواصل معنا</h2>
            <div className="contactGrid">
              <div className="contactInfo">
                <div className="contactItem">
                  <i className="location-icon"></i>
                  <p>المقر الرئيسي: القاهرة، جمهورية مصر العربية</p>
                </div>
                <div className="contactItem">
                  <i className="phone-icon"></i>
                  <p>هاتف: 0123456789</p>
                </div>
                <div className="contactItem">
                  <i className="email-icon"></i>
                  <p>البريد الإلكتروني: info@shamstex.com</p>
                </div>
                <div className="socialIcons">
                  <a href="#" className="socialIcon facebook"></a>
                  <a href="#" className="socialIcon instagram"></a>
                  <a href="#" className="socialIcon linkedin"></a>
                </div>
              </div>
              <div className="contactMap">
                <div className="mapPlaceholder">
                  <Image src="/api/placeholder/500/300" alt="موقع شركة شمس تكس" width={500} height={300} layout="responsive" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}