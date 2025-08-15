// Simple UI interactions and lightweight form UX
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Language switcher with simple i18n
  const dictionaries = {
    en: {
      'nav.services': 'Services',
      'nav.catalog': 'Catalog',
      'nav.process': 'How it works',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.title': 'Cars from China\n<span class="gold">turn‑key</span>',
      'hero.lead': 'Save up to 30%, transparent deal, legal support and warranty. CTCARS is your reliable guide to the Chinese car market.',
      'hero.cta1': 'Get a consultation',
      'hero.cta2': 'View offers',
      'hero.b1': 'Seller and vehicle verification',
      'hero.b2': 'Shipping, customs, certification',
      'hero.b3': 'Payment in a convenient currency',
      'ribbon.pick': 'Selection',
      'ribbon.inspect': 'Inspection',
      'ribbon.insure': 'Insurance',
      'ribbon.delivery': 'Delivery',
      'ribbon.customs': 'Customs',
      'services.title': 'Services',
      'services.s1.title': 'Car selection',
      'services.s1.text': 'We prepare a selection for your budget and needs. Compare markets across Chinese cities and find the best trim.',
      'services.s2.title': 'Inspection and contract',
      'services.s2.text': 'We check history, condition and documents. Prepare a transparent contract and payment scheme.',
      'services.s3.title': 'Logistics',
      'services.s3.text': 'Sea/rail/road delivery, insurance, tracking at every stage.',
      'services.s4.title': 'Customs and warranty',
      'services.s4.text': 'Customs clearance and certification. We provide a legal clean title guarantee.',
      'catalog.title': 'Sample offers',
      'catalog.c1.title': 'EV Crossover',
      'catalog.c1.meta': 'Range 500 km • 2024',
      'catalog.c2.title': 'D‑segment sedan',
      'catalog.c2.meta': 'Rich equipment • 2024',
      'catalog.c3.title': 'Hybrid hatchback',
      'catalog.c3.meta': 'Fuel 3.8 l/100 km • 2023',
      'catalog.from24900': 'from $24 900',
      'catalog.from18700': 'from $18 700',
      'catalog.from15200': 'from $15 200',
      'catalog.consult': 'Consultation',
      'catalog.note': 'Prices are indicative. Check current offers with the manager.',
      'process.title': 'How we work',
      'process.s1.title': 'Brief and selection',
      'process.s1.text': 'We set budget, requirements and timing. Offer 3–5 optimal options.',
      'process.s2.title': 'Inspection and payment',
      'process.s2.text': 'Technical diagnostics, legal purity, secure payment under contract.',
      'process.s3.title': 'Delivery',
      'process.s3.text': 'We arrange logistics and insurance. Online tracking all the way.',
      'process.s4.title': 'Customs and handover',
      'process.s4.text': 'Customs and certification completed. We hand over a turn‑key car.',
      'about.text': 'We specialize in supplying new and used cars from China. We work transparently and save your time: we take care of everything from selection to registration.',
      'about.b1': 'Own partner network in China',
      'about.b2': 'Legal support of the deal',
      'about.b3': 'Fixed timing and budget in the contract',
      'about.years': 'years on the market',
      'about.clients': 'happy clients',
      'contacts.title': 'Get in touch',
      'contacts.lead': 'Describe the desired car and budget — we will send the first selection within 24 hours.',
      'contacts.phone': 'Phone / WhatsApp:',
      'form.name': 'Name',
      'form.namePh': 'Your name',
      'form.phone': 'Phone',
      'form.wish': 'Car preferences',
      'form.wishPh': 'Make/model, budget, year, mileage...',
      'form.send': 'Send',
      'modal.title': 'Get a consultation',
      'modal.text': 'Leave your contacts — we will get back to you shortly.',
      'footer.tag': 'Cars from China turn‑key',
      'footer.rights': 'All rights reserved.'
    },
    ru: {
      'nav.services': 'Услуги',
      'nav.catalog': 'Каталог',
      'nav.process': 'Как это работает',
      'nav.about': 'О нас',
      'nav.contact': 'Связаться',
      'hero.title': 'Автомобили из Китая\n<span class="gold">под ключ</span>',
      'hero.lead': 'Экономия до 30%, прозрачная сделка, юридическое сопровождение и гарантия. CTCARS — ваш надёжный проводник на рынке китайских авто.',
      'hero.cta1': 'Получить консультацию',
      'hero.cta2': 'Смотреть предложения',
      'hero.b1': 'Проверка продавца и авто',
      'hero.b2': 'Доставка, растаможка, сертификация',
      'hero.b3': 'Оплата в удобной валюте',
      'ribbon.pick': 'Подбор',
      'ribbon.inspect': 'Проверка',
      'ribbon.insure': 'Страхование',
      'ribbon.delivery': 'Доставка',
      'ribbon.customs': 'Растаможка',
      'services.title': 'Услуги',
      'services.s1.title': 'Подбор авто',
      'services.s1.text': 'Составим подбор под ваш бюджет и требования. Сравним рынки разных городов Китая, найдём оптимальную комплектацию.',
      'services.s2.title': 'Проверка и договор',
      'services.s2.text': 'Проверяем историю, состояние и документы. Готовим прозрачный договор и схему оплаты.',
      'services.s3.title': 'Логистика',
      'services.s3.text': 'Организуем доставку по морю/жд/авто, страхование, отслеживание на каждом этапе.',
      'services.s4.title': 'Растаможка и гарантия',
      'services.s4.text': 'Проходим таможню и сертификацию. Даём гарантию юридической чистоты.',
      'catalog.title': 'Примеры предложений',
      'catalog.c1.title': 'Кроссовер EV',
      'catalog.c1.meta': 'Запас хода 500 км • 2024',
      'catalog.c2.title': 'Седан D‑класс',
      'catalog.c2.meta': 'Богатая комплектация • 2024',
      'catalog.c3.title': 'Гибридный хэтчбек',
      'catalog.c3.meta': 'Расход 3.8 л/100 км • 2023',
      'catalog.from24900': 'от $24 900',
      'catalog.from18700': 'от $18 700',
      'catalog.from15200': 'от $15 200',
      'catalog.consult': 'Консультация',
      'catalog.note': 'Цены ориентировочные. Уточняйте актуальные предложения у менеджера.',
      'process.title': 'Как мы работаем',
      'process.s1.title': 'Бриф и подбор',
      'process.s1.text': 'Фиксируем бюджет, требования и сроки. Предлагаем 3–5 оптимальных вариантов.',
      'process.s2.title': 'Проверка и оплата',
      'process.s2.text': 'Техническая диагностика, юридическая чистота, безопасная оплата по договору.',
      'process.s3.title': 'Доставка',
      'process.s3.text': 'Организуем логистику и страхование. Онлайн‑трекинг на всём пути.',
      'process.s4.title': 'Растаможка и выдача',
      'process.s4.text': 'Проходим таможню и сертификацию. Выдаём автомобиль «под ключ».',
      'about.text': 'Мы специализируемся на поставках новых и подержанных автомобилей из Китая. Работаем прозрачно и бережём ваше время: берём на себя все вопросы от подбора до постановки на учёт.',
      'about.b1': 'Собственная сеть партнёров в Китае',
      'about.b2': 'Юридическое сопровождение сделки',
      'about.b3': 'Фиксируем сроки и бюджет в договоре',
      'about.years': 'лет на рынке',
      'about.clients': 'довольных клиентов',
      'contacts.title': 'Связаться с нами',
      'contacts.lead': 'Опишите желаемый автомобиль и бюджет — пришлём первичный подбор в течение 24 часов.',
      'contacts.phone': 'Телефон / WhatsApp:',
      'form.name': 'Имя',
      'form.namePh': 'Ваше имя',
      'form.phone': 'Телефон',
      'form.wish': 'Пожелания к авто',
      'form.wishPh': 'Марка/модель, бюджет, год, пробег...',
      'form.send': 'Отправить',
      'modal.title': 'Получить консультацию',
      'modal.text': 'Оставьте контакты — мы свяжемся с вами в ближайшее время.',
      'footer.tag': 'Авто из Китая под ключ',
      'footer.rights': 'Все права защищены.'
    },
    zh: {
      'nav.services': '服务',
      'nav.catalog': '车型',
      'nav.process': '流程',
      'nav.about': '关于我们',
      'nav.contact': '联系',
      'hero.title': '中国汽车\n<span class="gold">一站式到手</span>',
      'hero.lead': '最高节省30%，流程透明，提供法律支持与保障。CTCARS——您可信赖的中国汽车顾问。',
      'hero.cta1': '获取咨询',
      'hero.cta2': '查看车型',
      'hero.b1': '卖家与车辆核验',
      'hero.b2': '运输、清关、认证',
      'hero.b3': '多币种便捷支付',
      'ribbon.pick': '选车',
      'ribbon.inspect': '核验',
      'ribbon.insure': '保险',
      'ribbon.delivery': '运输',
      'ribbon.customs': '清关',
      'services.title': '服务',
      'services.s1.title': '车型筛选',
      'services.s1.text': '按预算与需求提供车源，比较各城市市场，找到最佳配置。',
      'services.s2.title': '核验与合同',
      'services.s2.text': '核验车况与文件，提供透明合同与付款方案。',
      'services.s3.title': '物流',
      'services.s3.text': '海运/铁路/公路运输，保险与全程跟踪。',
      'services.s4.title': '清关与保障',
      'services.s4.text': '完成清关与认证，确保法律合规。',
      'catalog.title': '示例车型',
      'catalog.c1.title': '纯电跨界车',
      'catalog.c1.meta': '续航 500 公里 • 2024',
      'catalog.c2.title': '中大型轿车',
      'catalog.c2.meta': '高配 • 2024',
      'catalog.c3.title': '混动掀背车',
      'catalog.c3.meta': '油耗 3.8 L/100km • 2023',
      'catalog.from24900': '¥$24 900 起',
      'catalog.from18700': '¥$18 700 起',
      'catalog.from15200': '¥$15 200 起',
      'catalog.consult': '咨询',
      'catalog.note': '价格仅供参考，具体以经理确认为准。',
      'process.title': '如何合作',
      'process.s1.title': '需求与选车',
      'process.s1.text': '确定预算与期限，提供 3–5 个最佳方案。',
      'process.s2.title': '核验与付款',
      'process.s2.text': '技术检测、法律合规、合同保障的安全付款。',
      'process.s3.title': '运输',
      'process.s3.text': '安排物流与保险，全程在线追踪。',
      'process.s4.title': '清关交付',
      'process.s4.text': '完成清关与认证，车辆交付到手。',
      'about.text': '我们专注于中国新车与二手车供应，流程透明，节省您的时间：从选车到上牌一站式完成。',
      'about.b1': '中国本地合作网络',
      'about.b2': '法律与合同支持',
      'about.b3': '合同锁定时间与预算',
      'about.years': '年行业经验',
      'about.clients': '位满意客户',
      'contacts.title': '联系我们',
      'contacts.lead': '描述目标车型与预算—24小时内提供首批车源。',
      'contacts.phone': '电话 / WhatsApp：',
      'form.name': '姓名',
      'form.namePh': '您的姓名',
      'form.phone': '电话',
      'form.wish': '车辆需求',
      'form.wishPh': '品牌/车型、预算、年份、里程…',
      'form.send': '发送',
      'modal.title': '获取咨询',
      'modal.text': '留下联系方式，我们很快与您联系。',
      'footer.tag': '中国汽车 一站式到手',
      'footer.rights': '版权所有。'
    }
  };

  const langRoot = document.documentElement;
  const langControl = document.getElementById('lang');
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');

  function applyTranslations(lang) {
    const dict = dictionaries[lang] || dictionaries.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (!value) return;
      const attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, value);
      } else {
        el.innerHTML = value;
      }
    });
    langRoot.setAttribute('lang', lang === 'ru' ? 'ru' : lang === 'zh' ? 'zh' : 'en');
    localStorage.setItem('ctcars_lang', lang);
  }

  if (langControl && langBtn && langMenu) {
    langBtn.addEventListener('click', () => langControl.classList.toggle('open'));
    langMenu.querySelectorAll('button[data-lang]').forEach((btn) =>
      btn.addEventListener('click', () => {
        applyTranslations(btn.getAttribute('data-lang'));
        langControl.classList.remove('open');
      })
    );
    document.addEventListener('click', (e) => {
      if (!langControl.contains(e.target)) langControl.classList.remove('open');
    });
  }

  // Load saved language (default EN)
  applyTranslations(localStorage.getItem('ctcars_lang') || 'en');

  // Modal handling
  function openModal() {
    document.getElementById('modal-consult').setAttribute('aria-hidden', 'false');
  }
  function closeModal() {
    document.getElementById('modal-consult').setAttribute('aria-hidden', 'true');
  }
  document.querySelectorAll('[data-modal="consult"]').forEach((btn) =>
    btn.addEventListener('click', openModal)
  );
  document.querySelectorAll('[data-close]').forEach((el) =>
    el.addEventListener('click', closeModal)
  );

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.pageYOffset - 70;
          window.scrollTo({ top, behavior: 'smooth' });
          nav && nav.classList.remove('open');
        }
      }
    });
  });

  // Forms UX with Formspree
  function wireForm(formId, statusId) {
    const form = document.getElementById(formId);
    const status = document.getElementById(statusId);
    if (!form) return;

    // Phone country selector
    const phoneGroup = form.querySelector('[data-phone]');
    if (phoneGroup) {
      const btn = phoneGroup.querySelector('.phone-select');
      const menu = phoneGroup.querySelector('.phone-menu');
      const input = phoneGroup.querySelector('input[type="tel"]');
      const hidden = phoneGroup.querySelector('input[type="hidden"][name="country"]');
      function setDial(flag, dial, code) {
        btn.querySelector('.flag').textContent = flag;
        btn.querySelector('.dial').textContent = dial;
        // Placeholder shows local number pattern (without country code)
        if (dial === '+971') input.placeholder = '5x xxx xxxx';
        else if (dial === '+7') input.placeholder = '9xx xxx xx xx';
        else if (dial === '+86') input.placeholder = '1xx xxxx xxxx';
        hidden.value = code;
      }
      btn.addEventListener('click', () => phoneGroup.classList.toggle('open'));
      menu.querySelectorAll('li').forEach((li) => li.addEventListener('click', () => {
        setDial(li.dataset.flag, li.dataset.dial, li.dataset.country);
        phoneGroup.classList.remove('open');
      }));
      document.addEventListener('click', (e) => { if (!phoneGroup.contains(e.target)) phoneGroup.classList.remove('open'); });
    }
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status && (status.textContent = 'Sending...');
      try {
        const data = new FormData(form);
        const res = await fetch(form.getAttribute('action'), {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          status && (status.textContent = 'Thanks! We will contact you soon.');
          form.reset();
          setTimeout(() => {
            status && (status.textContent = '');
            closeModal();
          }, 1800);
        } else {
          status && (status.textContent = 'Submit error. Please try later.');
        }
      } catch (err) {
        status && (status.textContent = 'Network error. Try again later.');
      }
    });
  }

  wireForm('contact-form', 'form-status');
  wireForm('modal-form', 'modal-status');
})();


