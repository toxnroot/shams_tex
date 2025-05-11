import './footer.css'
import Image from 'next/image';
const Footer = () => {
    return (
       <footer>
        <div className="container">
          <div className="footerContent">
            <div className="footerLogo">
              <Image src="/api/placeholder/150/80" alt="شعار شمس تكس" width={150} height={80} />
              <p>شمس تكس - جودة تشرق كالشمس</p>
            </div>
            <div className="footerLinks">
              <div className="linkColumn">
                <h4>روابط سريعة</h4>
                <ul>
                  <li><a href="/">الرئيسية</a></li>
                  <li><a href="/about">من نحن</a></li>
                  <li><a href="/products">المنتجات</a></li>
                  <li><a href="/contact">اتصل بنا</a></li>
                </ul>
              </div>
              <div className="linkColumn">
                <h4>خدماتنا</h4>
                <ul>
                  <li><a href="/services">تصنيع الأقمشة</a></li>
                  <li><a href="/services">استيراد وتصدير</a></li>
                  <li><a href="/services">استشارات نسيجية</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} شركة شمس تكس</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
