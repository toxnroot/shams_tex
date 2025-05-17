// pages/services.js

const Page = () => {
  return (
    <div className="min-h-screen max-h-full w-full flex flex-col items-center justify-start">
      <div
        className="card-services-info bg-[url('https://res.cloudinary.com/do88eynar/image/upload/v1747049858/ys8glali31ao6epnygx2.webp')] , bg-cover bg-center bg-no-repeat w-full h-[400px] flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl font-bold text-amber-500">Services</h1>
        <p className="text-lg mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};
export default Page;

// "use client";

// import './services.css';

// import Head from 'next/head';
// import Image from 'next/image';
// import { useEffect } from 'react';

// export default function Services() {
//   // إضافة تأثير عند التمرير للصفحة
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('.fadeIn');
//       sections.forEach(section => {
//         const sectionTop = section.getBoundingClientRect().top;
//         if (sectionTop < window.innerHeight - 100) {
//           section.classList.add('visible');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // تنفيذ مرة عند التحميل

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="servicesContainer">
//       <Head>
//         <title>خدماتنا | شمس تكس - رواد صناعة الأقمشة في مصر</title>
//         <meta name="description" content="استكشف خدمات شمس تكس المتميزة في صناعة وتوريد الأقمشة عالية الجودة في مصر والشرق الأوسط" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <header className="hero">
//         <div className="overlay"></div>
//         <div className="heroContent">
//           <h1>خدماتنا</h1>
//           <p>حلول متكاملة في عالم النسيج</p>
//         </div>
//       </header>

//       <main>
//         <section className="section fadeIn" id="servicesIntro">
//           <div className="container">
//             <h2>خدمات متميزة</h2>
//             <div className="introGrid">
//               <div className="introText">
//                 <p>
//                   تقدم شركة شمس تكس مجموعة متكاملة من الخدمات المتخصصة في مجال صناعة الأقمشة،
//                   معتمدين على خبرتنا الواسعة وفريقنا المتخصص وأحدث التقنيات العالمية.
//                 </p>
//                 <p>
//                   نحن نسعى جاهدين لتلبية احتياجات عملائنا المختلفة، سواء كانوا مصنعين أو تجار أو مصممين،
//                   من خلال توفير خدمات شاملة بأعلى معايير الجودة والدقة.
//                 </p>
//               </div>
//               <div className="introImage">
//                 <div className="imageWrapper">
//                   <Image
//                     src="/api/placeholder/600/400"
//                     alt="خدمات شمس تكس"
//                     width={600}
//                     height={400}
//                     layout="responsive"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="section fadeIn goldBackground" id="mainServices">
//           <div className="container">
//             <h2>خدماتنا الرئيسية</h2>
//             <div className="servicesGrid">
//               <div className="serviceCard">
//                 <div className="serviceIcon">
//                   <i className="production-icon"></i>
//                 </div>
//                 <h3>تصنيع الأقمشة</h3>
//                 <p>
//                   تصنيع مجموعة واسعة من الأقمشة عالية الجودة باستخدام أحدث تقنيات النسيج العالمية،
//                   مع مراعاة أعلى معايير الجودة في كل مرحلة من مراحل الإنتاج.
//                 </p>
//                 <ul className="serviceFeatures">
//                   <li>أقمشة قطنية بجميع أنواعها</li>
//                   <li>أقمشة صناعية وتقنية</li>
//                   <li>أقمشة التنجيد والمفروشات</li>
//                   <li>أقمشة الملابس والأزياء</li>
//                 </ul>
//               </div>

//               <div className="serviceCard">
//                 <div className="serviceIcon">
//                   <i className="design-icon"></i>
//                 </div>
//                 <h3>تصميم الأنماط والنقوش</h3>
//                 <p>
//                   فريق متخصص من المصممين المبدعين لابتكار تصاميم وأنماط فريدة
//                   تواكب أحدث صيحات الموضة العالمية وتلبي الأذواق المختلفة.
//                 </p>
//                 <ul className="serviceFeatures">
//                   <li>تصميمات حصرية ومبتكرة</li>
//                   <li>تنفيذ تصميمات العملاء الخاصة</li>
//                   <li>تطوير الأنماط والألوان وفق اتجاهات السوق</li>
//                   <li>استشارات في اختيار التصاميم المناسبة</li>
//                 </ul>
//               </div>

//               <div className="serviceCard">
//                 <div className="serviceIcon">
//                   <i className="trade-icon"></i>
//                 </div>
//                 <h3>استيراد وتصدير</h3>
//                 <p>
//                   خدمات متكاملة للاستيراد والتصدير مع شبكة علاقات واسعة مع موردين ومصنعين عالميين،
//                   مما يتيح لنا توفير منتجات متنوعة وبأسعار تنافسية.
//                 </p>
//                 <ul className="serviceFeatures">
//                   <li>استيراد أجود أنواع الأقمشة العالمية</li>
//                   <li>تصدير المنتجات المصرية للأسواق العالمية</li>
//                   <li>إدارة كاملة لسلسلة التوريد</li>
//                   <li>خبرة في إجراءات التخليص الجمركي</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="section fadeIn" id="specializedServices">
//           <div className="container">
//             <h2>خدمات متخصصة</h2>
//             <div className="specializedGrid">
//               <div className="specializedItem">
//                 <div className="specializedImage">
//                   <Image src="/api/placeholder/500/300" alt="خدمات الصباغة والمعالجة" width={500} height={300} />
//                 </div>
//                 <div className="specializedContent">
//                   <h3>الصباغة والمعالجة</h3>
//                   <p>
//                     نقدم خدمات متخصصة في صباغة الأقمشة ومعالجتها باستخدام أحدث التقنيات وأجود أنواع الصبغات.
//                     تشمل خدماتنا معالجات خاصة مثل مقاومة الماء، مقاومة الحريق، المعالجة المضادة للبكتيريا،
//                     والمعالجات التي تضيف خصائص وظيفية للأقمشة حسب احتياجات العملاء.
//                   </p>
//                 </div>
//               </div>

//               <div className="specializedItem reverse">
//                 <div className="specializedContent">
//                   <h3>الفحص وضمان الجودة</h3>
//                   <p>
//                     نمتلك مختبرات متطورة لفحص وضمان جودة جميع منتجاتنا وفق المعايير العالمية.
//                     يتم إجراء اختبارات دقيقة لقياس متانة النسيج، ثبات الألوان، مقاومة الانكماش،
//                     وغيرها من الخصائص الفيزيائية والكيميائية للأقمشة لضمان أعلى مستويات الجودة.
//                   </p>
//                 </div>
//                 <div className="specializedImage">
//                   <Image src="/api/placeholder/500/300" alt="خدمات الفحص وضمان الجودة" width={500} height={300} />
//                 </div>
//               </div>

//               <div className="specializedItem">
//                 <div className="specializedImage">
//                   <Image src="/api/placeholder/500/300" alt="الاستشارات الفنية" width={500} height={300} />
//                 </div>
//                 <div className="specializedContent">
//                   <h3>الاستشارات الفنية</h3>
//                   <p>
//                     فريق من الخبراء المتخصصين في مجال النسيج لتقديم الاستشارات الفنية للمصنعين والمستثمرين.
//                     نساعد عملائنا في اختيار المواد المناسبة، تطوير المنتجات، تحسين كفاءة الإنتاج،
//                     وحل المشكلات الفنية المتعلقة بصناعة النسيج.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="section fadeIn goldBackground" id="customServices">
//           <div className="container">
//             <h2>خدمات مخصصة</h2>
//             <div className="customServicesWrapper">
//               <p className="customIntro">
//                 في شركة شمس تكس، نتفهم أن كل عميل لديه احتياجات فريدة، ولذلك نقدم حلولاً مخصصة تلبي متطلباتكم الخاصة.
//               </p>

//               <div className="customServicesGrid">
//                 <div className="customCard">
//                   <h3>تصنيع بمواصفات خاصة</h3>
//                   <p>إنتاج أقمشة حسب المواصفات الدقيقة التي يحددها العميل من حيث الوزن، العرض، التركيب النسجي، والخصائص الوظيفية.</p>
//                 </div>

//                 <div className="customCard">
//                   <h3>تطوير المنتجات</h3>
//                   <p>المساعدة في تطوير منتجات نسيجية جديدة ومبتكرة تناسب احتياجات السوق المتغيرة وتواكب أحدث التطورات التكنولوجية.</p>
//                 </div>

//                 <div className="customCard">
//                   <h3>حلول التعبئة والتغليف</h3>
//                   <p>خيارات متعددة للتعبئة والتغليف تناسب احتياجات التخزين والشحن المختلفة، مع إمكانية التغليف بعلامات تجارية خاصة.</p>
//                 </div>

//                 <div className="customCard">
//                   <h3>خدمات لوجستية متكاملة</h3>
//                   <p>حلول شاملة للشحن والتخزين والتوزيع، مع إمكانية تتبع الشحنات وضمان وصولها في الوقت المحدد وبحالة ممتازة.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="section fadeIn" id="whyChooseUs">
//           <div className="container">
//             <h2>لماذا تختار شمس تكس؟</h2>
//             <div className="reasonsGrid">
//               <div className="reasonCard">
//                 <div className="reasonIcon">
//                   <i className="experience-icon"></i>
//                 </div>
//                 <h3>خبرة واسعة</h3>
//                 <p>أكثر من 20 عاماً من الخبرة في مجال صناعة النسيج والأقمشة</p>
//               </div>

//               <div className="reasonCard">
//                 <div className="reasonIcon">
//                   <i className="quality-icon"></i>
//                 </div>
//                 <h3>جودة عالمية</h3>
//                 <p>التزام تام بأعلى معايير الجودة العالمية في جميع منتجاتنا وخدماتنا</p>
//               </div>

//               <div className="reasonCard">
//                 <div className="reasonIcon">
//                   <i className="team-icon"></i>
//                 </div>
//                 <h3>فريق متخصص</h3>
//                 <p>فريق من الخبراء والفنيين المتخصصين في جميع مجالات صناعة النسيج</p>
//               </div>

//               <div className="reasonCard">
//                 <div className="reasonIcon">
//                   <i className="technology-icon"></i>
//                 </div>
//                 <h3>تكنولوجيا حديثة</h3>
//                 <p>استخدام أحدث التقنيات والمعدات في جميع مراحل الإنتاج</p>
//               </div>

//               <div className="reasonCard">
//                 <div className="reasonIcon">
//                   <i className="flexibility-icon"></i>
//                 </div>
//                 <h3>مرونة في التعامل</h3>
//                 <p>قدرة على تلبية الطلبات المختلفة والتكيف مع احتياجات السوق المتغيرة</p>
//               </div>

//               <div className="reasonCard">
//                 <div className="reasonIcon">
//                   <i className="delivery-icon"></i>
//                 </div>
//                 <h3>التزام بالمواعيد</h3>
//                 <p>احترام مواعيد التسليم وضمان وصول المنتجات في الوقت المحدد</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="section fadeIn contactSection" id="contact">
//           <div className="container">
//             <h2>تواصل معنا</h2>
//             <p className="contactIntro">هل تحتاج إلى مزيد من المعلومات حول خدماتنا؟ فريقنا جاهز للإجابة على استفساراتك وتقديم الدعم اللازم.</p>

//             <div className="contactButtons">
//               <a href="/contact" className="contactBtn primaryBtn">تواصل معنا</a>
//               <a href="tel:0123456789" className="contactBtn secondaryBtn">اتصل بنا: 0123456789</a>
//             </div>

//             <div className="contactInfo">
//               <div className="contactItem">
//                 <i className="location-icon"></i>
//                 <p>المقر الرئيسي: القاهرة، جمهورية مصر العربية</p>
//               </div>
//               <div className="contactItem">
//                 <i className="email-icon"></i>
//                 <p>البريد الإلكتروني: services@shamstex.com</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//     </div>
//   );
// }
