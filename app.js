const events = [
  { id: 'evt-001', title: 'Конференция DevDay 2026', description: 'Главная конференция года для разработчиков: доклады, воркшопы и нетворкинг', format: 'conference', status: 'registration', city: 'Москва', venue: 'Крокус Экспо', startsAt: '2026-11-12T07:00:00Z', organizer: 'Иванов А.', access: 'paid', programReady: 80, speakers: ['Анна Орлова', 'Павел Лебедев', 'Мария Крылова'], tickets: [{ name: 'Стандарт', price: 4900, sold: 410, total: 600 }, { name: 'VIP', price: 14900, sold: 90, total: 120 }, { name: 'Студенческий', price: 1500, sold: 60, total: 80 }], schedule: [{ time: '10:00', title: 'Открытие конференции', speaker: 'Анна Орлова' }, { time: '11:30', title: 'Архитектура масштабируемых систем', speaker: 'Павел Лебедев' }, { time: '14:00', title: 'Инженерная культура в команде', speaker: 'Мария Крылова' }], registrationsHistory: [70, 95, 120, 110, 140], tags: ['it', 'доклады'] },
  { id: 'evt-002', title: 'Мастер-класс по UX-исследованиям', description: 'Практикум: как провести интервью с пользователями и разобрать результаты', format: 'workshop', status: 'registration', city: 'Санкт-Петербург', venue: 'Коворкинг «Лофт»', startsAt: '2026-10-21T08:00:00Z', organizer: 'Петрова М.', access: 'paid', programReady: 90, speakers: ['Елена Миронова'], tickets: [{ name: 'Участник', price: 3500, sold: 18, total: 25 }], schedule: [{ time: '11:00', title: 'Основы пользовательских интервью', speaker: 'Елена Миронова' }, { time: '14:00', title: 'Разбор кейсов участников', speaker: 'Елена Миронова' }], registrationsHistory: [2, 4, 3, 5, 4], tags: ['ux', 'практикум'] },
  { id: 'evt-003', title: 'Митап продуктовых менеджеров', description: 'Вечер коротких докладов о метриках и работе с гипотезами', format: 'meetup', status: 'registration', city: 'Москва', venue: 'Пространство «Точка»', startsAt: '2026-10-15T15:30:00Z', organizer: 'Сидоров К.', access: 'free', programReady: 70, speakers: ['Игорь Белов', 'Дарья Власова'], tickets: [{ name: 'Бесплатный', price: 0, sold: 96, total: 120 }], schedule: [{ time: '18:30', title: 'Метрики роста продукта', speaker: 'Игорь Белов' }, { time: '19:15', title: 'Как проверять гипотезы быстро', speaker: 'Дарья Власова' }], registrationsHistory: [12, 18, 20, 25, 21], tags: ['продукт', 'митап'] },
  { id: 'evt-004', title: 'Вебинар: старт карьеры в аналитике', description: 'Как войти в профессию аналитика и что учить в первую очередь', format: 'webinar', status: 'registration', city: 'Онлайн', venue: 'Zoom', startsAt: '2026-10-10T14:00:00Z', organizer: 'Козлова Е.', access: 'free', programReady: 100, speakers: ['Сергей Тарасов'], tickets: [{ name: 'Бесплатный', price: 0, sold: 640, total: 1000 }], schedule: [{ time: '17:00', title: 'Карьерный путь аналитика', speaker: 'Сергей Тарасов' }], registrationsHistory: [90, 130, 160, 150, 110], tags: ['аналитика', 'карьера'] },
  { id: 'evt-005', title: 'Форум «Город будущего»', description: 'Встреча урбанистов, архитекторов и представителей городских администраций', format: 'forum', status: 'soldout', city: 'Казань', venue: 'Экспоцентр', startsAt: '2026-10-28T06:00:00Z', organizer: 'Новиков Д.', access: 'paid', programReady: 95, speakers: ['Олег Данилов', 'Ирина Захарова', 'Карим Сафин'], tickets: [{ name: 'Стандарт', price: 6500, sold: 700, total: 700 }, { name: 'Эксперт', price: 12000, sold: 100, total: 100 }], schedule: [{ time: '09:30', title: 'Пленарное заседание', speaker: 'Олег Данилов' }, { time: '12:00', title: 'Умные дворы и транспорт', speaker: 'Ирина Захарова' }], registrationsHistory: [60, 80, 70, 50, 0], tags: ['урбанистика', 'город'] },
  { id: 'evt-006', title: 'Фестиваль уличной еды', description: 'Два дня еды, музыки и мастер-классов от шеф-поваров', format: 'festival', status: 'draft', city: 'Екатеринбург', venue: 'Парк Маяковского', startsAt: '2026-12-05T08:00:00Z', organizer: 'Иванов А.', access: 'free', programReady: 35, speakers: [], tickets: [{ name: 'Бесплатный', price: 0, sold: 0, total: 5000 }], schedule: [], registrationsHistory: [0, 0, 0, 0, 0], tags: ['еда', 'фестиваль'] },
  { id: 'evt-007', title: 'Конференция по кибербезопасности', description: 'Доклады об актуальных угрозах и защите корпоративных систем', format: 'conference', status: 'registration', city: 'Москва', venue: 'Цифровое деловое пространство', startsAt: '2026-11-20T06:30:00Z', organizer: 'Петрова М.', access: 'paid', programReady: 60, speakers: ['Андрей Кузин', 'Наталья Рогова'], tickets: [{ name: 'Стандарт', price: 7900, sold: 230, total: 500 }, { name: 'Онлайн', price: 2900, sold: 120, total: 400 }], schedule: [{ time: '10:00', title: 'Угрозы 2026 года', speaker: 'Андрей Кузин' }, { time: '12:30', title: 'Защита облачной инфраструктуры', speaker: 'Наталья Рогова' }], registrationsHistory: [25, 40, 38, 52, 45], tags: ['безопасность', 'it'] },
  { id: 'evt-008', title: 'Мастер-класс по фотографии', description: 'Работа со светом и композицией в студии, практика с моделями', format: 'workshop', status: 'soldout', city: 'Москва', venue: 'Фотостудия «Свет»', startsAt: '2026-10-18T09:00:00Z', organizer: 'Козлова Е.', access: 'paid', programReady: 100, speakers: ['Виктор Ларин'], tickets: [{ name: 'Участник', price: 4200, sold: 15, total: 15 }], schedule: [{ time: '12:00', title: 'Студийный свет', speaker: 'Виктор Ларин' }, { time: '15:00', title: 'Практика с моделями', speaker: 'Виктор Ларин' }], registrationsHistory: [5, 4, 3, 2, 1], tags: ['фото', 'практикум'] },
  { id: 'evt-009', title: 'Вебинар по финансовой грамотности', description: 'Личный бюджет, накопления и инвестиции для начинающих', format: 'webinar', status: 'finished', city: 'Онлайн', venue: 'Zoom', startsAt: '2026-09-24T15:00:00Z', organizer: 'Сидоров К.', access: 'free', programReady: 100, speakers: ['Людмила Фомина'], tickets: [{ name: 'Бесплатный', price: 0, sold: 820, total: 1000 }], schedule: [{ time: '18:00', title: 'Личный бюджет за 30 минут', speaker: 'Людмила Фомина' }], registrationsHistory: [0, 0, 0, 0, 0], tags: ['финансы', 'обучение'] },
  { id: 'evt-010', title: 'Митап разработчиков на Go', description: 'Три доклада о производительности и инструментах языка Go', format: 'meetup', status: 'finished', city: 'Санкт-Петербург', venue: 'Офис «Нева»', startsAt: '2026-09-18T15:00:00Z', organizer: 'Новиков Д.', access: 'free', programReady: 100, speakers: ['Роман Егоров', 'Алина Мухина'], tickets: [{ name: 'Бесплатный', price: 0, sold: 140, total: 150 }], schedule: [{ time: '18:30', title: 'Профилирование Go-сервисов', speaker: 'Роман Егоров' }], registrationsHistory: [0, 0, 0, 0, 0], tags: ['go', 'митап'] },
  { id: 'evt-011', title: 'Форум HR-директоров', description: 'Стратегии найма и удержания сотрудников, обмен опытом между компаниями', format: 'forum', status: 'draft', city: 'Москва', venue: 'Отель «Метрополь»', startsAt: '2026-12-10T07:00:00Z', organizer: 'Иванов А.', access: 'paid', programReady: 20, speakers: ['Валерия Исаева'], tickets: [{ name: 'Стандарт', price: 9900, sold: 0, total: 300 }], schedule: [], registrationsHistory: [0, 0, 0, 0, 0], tags: ['hr', 'форум'] },
  { id: 'evt-012', title: 'Фестиваль науки', description: 'Лекции, лаборатории и интерактивные выставки для детей и взрослых', format: 'festival', status: 'registration', city: 'Новосибирск', venue: 'Технопарк', startsAt: '2026-11-07T06:00:00Z', organizer: 'Козлова Е.', access: 'free', programReady: 55, speakers: ['Борис Нестеров', 'Ольга Титова'], tickets: [{ name: 'Бесплатный', price: 0, sold: 1800, total: 3000 }], schedule: [{ time: '11:00', title: 'Открытие фестиваля', speaker: 'Борис Нестеров' }, { time: '13:00', title: 'Лекция о космосе', speaker: 'Ольга Титова' }], registrationsHistory: [200, 260, 310, 290, 340], tags: ['наука', 'семья'] },
];

const supportRequests = [
  { id: 'req-001', title: 'Возврат билета', description: 'Участник не может прийти и просит вернуть деньги за билет VIP', severity: 'critical', status: 'new', eventId: 'evt-001', createdAt: '2026-10-07T08:41:00Z', resolvedAt: null, assignee: 'Петрова М.', tags: ['возврат', 'билеты'] },
  { id: 'req-002', title: 'Не пришло письмо с билетом', description: 'После оплаты на почту не пришёл электронный билет, нужна повторная отправка', severity: 'critical', status: 'inWork', eventId: 'evt-007', createdAt: '2026-10-07T06:44:00Z', resolvedAt: null, assignee: 'Иванов А.', tags: ['билеты', 'почта'] },
  { id: 'req-003', title: 'Смена имени участника', description: 'Нужно переоформить билет на коллегу, так как участник заболел', severity: 'warning', status: 'new', eventId: 'evt-002', createdAt: '2026-10-07T08:30:00Z', resolvedAt: null, assignee: 'Козлова Е.', tags: ['участник', 'билеты'] },
  { id: 'req-004', title: 'Лист ожидания', description: 'Пять человек просят записать их в лист ожидания, если освободятся места', severity: 'warning', status: 'new', eventId: 'evt-005', createdAt: '2026-10-07T08:12:00Z', resolvedAt: null, assignee: 'Сидоров К.', tags: ['места', 'ожидание'] },
  { id: 'req-005', title: 'Замена спикера', description: 'Докладчик отменил выступление, нужно обновить расписание и уведомить участников', severity: 'critical', status: 'inWork', eventId: 'evt-001', createdAt: '2026-10-07T07:55:00Z', resolvedAt: null, assignee: 'Петрова М.', tags: ['спикер', 'расписание'] },
  { id: 'req-006', title: 'Доступ для маломобильных гостей', description: 'Участница спрашивает о пандусе и местах в первом ряду', severity: 'info', status: 'inWork', eventId: 'evt-003', createdAt: '2026-10-07T07:05:00Z', resolvedAt: null, assignee: 'Козлова Е.', tags: ['доступность'] },
  { id: 'req-007', title: 'Ссылка на трансляцию', description: 'Участники вебинара не получили ссылку для подключения', severity: 'warning', status: 'closed', eventId: 'evt-004', createdAt: '2026-10-06T21:20:00Z', resolvedAt: '2026-10-06T22:05:00Z', assignee: 'Сидоров К.', tags: ['онлайн', 'ссылка'] },
  { id: 'req-008', title: 'Сертификат об участии', description: 'Слушатель просит выдать сертификат за прошедший вебинар', severity: 'info', status: 'closed', eventId: 'evt-009', createdAt: '2026-10-06T18:10:00Z', resolvedAt: '2026-10-06T18:50:00Z', assignee: 'Иванов А.', tags: ['сертификат'] },
  { id: 'req-009', title: 'Групповая скидка', description: 'Компания хочет купить 10 билетов и просит скидку', severity: 'info', status: 'new', eventId: 'evt-007', createdAt: '2026-10-07T05:00:00Z', resolvedAt: null, assignee: 'Петрова М.', tags: ['скидка', 'компании'] },
  { id: 'req-010', title: 'Ошибка в расписании', description: 'В программе перепутано время начала двух докладов', severity: 'warning', status: 'closed', eventId: 'evt-010', createdAt: '2026-09-17T14:30:00Z', resolvedAt: '2026-09-17T15:10:00Z', assignee: 'Сидоров К.', tags: ['расписание'] },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validators = {
  title(value, context) {
    const text = value.trim();
    if (!text) return 'Укажите название';
    if (text.length < 3) return 'Минимум 3 символа';
    if (text.length > 80) return 'Максимум 80 символов';
    if (context.titles.includes(text.toLowerCase())) return 'Мероприятие с таким названием уже есть';
    return '';
  },
  date(value) {
    if (!value) return 'Укажите дату проведения';
    if (Number.isNaN(Date.parse(value))) return 'Неверная дата';
    return '';
  },
  format: (value) => (value ? '' : 'Выберите формат'),
  email(value) {
    const text = value.trim();
    if (!text) return 'Укажите email организатора';
    if (text.length > 60) return 'Максимум 60 символов';
    if (!EMAIL_PATTERN.test(text)) return 'Неверный формат email, пример: name@company.com';
    return '';
  },
  description: (value) => (value.length > 160 ? 'Максимум 160 символов' : ''),
};

const dateFormatter = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'short', timeStyle: 'short', timeZone: 'Europe/Moscow' });

const EVENT_STATUS = { registration: 'Регистрация открыта', soldout: 'Мест нет', draft: 'Черновик', finished: 'Завершено' };
const REQUEST_STATUS = { new: 'Новый', inWork: 'В работе', closed: 'Закрыт' };
const URGENCY = { high: 'Высокая', medium: 'Средняя', low: 'Низкая' };
const FORMAT_LABELS = { conference: 'Конференция', workshop: 'Мастер-класс', meetup: 'Митап', webinar: 'Вебинар', forum: 'Форум', festival: 'Фестиваль' };
const ACCESS_LABELS = { paid: 'Платное', free: 'Бесплатное' };
const SEVERITY_URGENCY = { critical: 'high', warning: 'medium', info: 'low' };
const TABLE_COLUMNS = [['title', 'Название'], ['format', 'Формат'], ['city', 'Город'], ['startsAt', 'Начало'], ['access', 'Доступ'], ['status', 'Статус']];
const METER_THRESHOLDS = { low: 30, high: 70 };

const ticketsSold = (event) => event.tickets.reduce((sum, ticket) => sum + ticket.sold, 0);
const ticketsTotal = (event) => event.tickets.reduce((sum, ticket) => sum + ticket.total, 0);
const ticketsPercent = (event) => (ticketsTotal(event) ? Math.round((ticketsSold(event) / ticketsTotal(event)) * 100) : 0);
const formatPrice = (price) => (price ? `${price.toLocaleString('ru-RU')} ₽` : 'бесплатно');

const makeElement = (tag, { text, cls, attrs = {} } = {}, children = []) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, value);
  node.append(...children);
  return node;
};

const renderTime = (iso) => makeElement('time', { text: `${dateFormatter.format(new Date(iso))} МСК`, attrs: { datetime: iso } });
const renderBadge = (kind, label) => makeElement('span', { text: label, cls: `badge badge--${kind}` });
const renderUrgency = (level) =>
  makeElement('span', { text: URGENCY[level], cls: `priority priority--${level}`, attrs: { title: `Срочность: ${URGENCY[level].toLowerCase()}` } });
const renderAccess = (access) => makeElement('span', { text: ACCESS_LABELS[access], cls: `access access--${access}` });

const renderMeter = (label, value) =>
  makeElement('p', { cls: 'meter' }, [
    makeElement('span', { text: label, cls: 'meter__label' }),
    makeElement('meter', { attrs: { min: 0, max: 100, low: METER_THRESHOLDS.low, high: METER_THRESHOLDS.high, optimum: 100, value, 'aria-label': `${label} ${value}%` } }),
    makeElement('span', { text: `${value}%`, cls: 'meter__value' }),
  ]);

const renderTags = (tags) => makeElement('ul', { cls: 'tags' }, tags.map((tag) => makeElement('li', { text: tag })));
const renderFields = (pairs) =>
  makeElement('dl', { cls: 'fields' }, pairs.flatMap(([name, value]) => [makeElement('dt', { text: name }), makeElement('dd', {}, [value])]));

const renderTextList = (items, emptyText) =>
  items.length
    ? makeElement('ul', { cls: 'related' }, items.map((item) => makeElement('li', { text: item })))
    : makeElement('p', { text: emptyText, cls: 'card__desc' });

const renderSummary = (eventList, requestList) => {
  const items = [
    ['Регистрация открыта', eventList.filter((e) => e.status === 'registration').length, 'success'],
    ['Участников записано', eventList.reduce((sum, e) => sum + ticketsSold(e), 0), 'info'],
    ['Мероприятий без мест', eventList.filter((e) => e.status === 'soldout').length, 'warning'],
    ['Новых запросов', requestList.filter((r) => r.status === 'new').length, 'danger'],
  ];
  return makeElement('ul', { cls: 'summary' }, items.map(([label, value, kind]) =>
    makeElement('li', { cls: `summary__item summary__item--${kind}` }, [
      makeElement('strong', { text: String(value), cls: 'summary__value', attrs: { 'data-count': value } }),
      makeElement('span', { text: label }),
    ])));
};

const renderEventCard = (event, index = 0) =>
  makeElement('article', { cls: `card card--${event.status}`, attrs: { 'data-kind': 'event', 'data-id': event.id, style: `--i:${index}` } }, [
    makeElement('header', { cls: 'card__head' }, [
      makeElement('p', { text: event.id, cls: 'card__id' }),
      makeElement('h3', {}, [makeElement('button', { text: event.title, cls: 'link-btn', attrs: { type: 'button' } })]),
      renderBadge(event.status, EVENT_STATUS[event.status]),
    ]),
    makeElement('p', { text: event.description, cls: 'card__desc' }),
    renderFields([['Формат', FORMAT_LABELS[event.format]], ['Город', event.city], ['Билеты', `${ticketsSold(event)} из ${ticketsTotal(event)}`]]),
    renderMeter('Билеты', ticketsPercent(event)),
    renderMeter('Программа', event.programReady),
    makeElement('footer', { cls: 'card__meta' }, [
      renderTime(event.startsAt),
      makeElement('span', { text: `Организатор: ${event.organizer}` }),
      renderAccess(event.access),
      renderTags(event.tags),
    ]),
  ]);

const renderEventCards = (eventList) =>
  makeElement('div', { cls: 'cards' }, eventList.map((event, index) => renderEventCard(event, index)));

const tableCell = (label, content) => makeElement('td', { attrs: { 'data-label': label } }, [content]);

const renderEventsTable = (eventList, sort) => {
  const ariaSort = (key) => (sort.key === key ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none');
  const table = makeElement('table', { cls: 'table' }, [
    makeElement('caption', { text: 'Реестр мероприятий' }),
    makeElement('thead', {}, [makeElement('tr', {}, TABLE_COLUMNS.map(([key, label]) =>
      makeElement('th', { attrs: { scope: 'col', 'aria-sort': ariaSort(key) } }, [
        makeElement('button', { text: label, cls: 'sort-btn', attrs: { type: 'button', 'data-sort': key } }),
      ])))]),
    makeElement('tbody', {}, eventList.map((event) =>
      makeElement('tr', { attrs: { 'data-kind': 'event', 'data-id': event.id } }, [
        makeElement('th', { attrs: { scope: 'row' } }, [makeElement('button', { text: event.title, cls: 'link-btn', attrs: { type: 'button' } })]),
        tableCell('Формат', FORMAT_LABELS[event.format]),
        tableCell('Город', event.city),
        tableCell('Начало', renderTime(event.startsAt)),
        tableCell('Доступ', renderAccess(event.access)),
        tableCell('Статус', renderBadge(event.status, EVENT_STATUS[event.status])),
      ]))),
  ]);
  return makeElement('div', { cls: 'table-wrap' }, [table]);
};

const renderRequestCard = (request, event, index = 0) =>
  makeElement('article', { cls: `card alert alert--${request.severity}`, attrs: { 'data-kind': 'request', 'data-id': request.id, style: `--i:${index}` } }, [
    makeElement('header', { cls: 'card__head' }, [
      makeElement('p', { text: request.id, cls: 'card__id' }),
      makeElement('h3', {}, [makeElement('button', { text: request.title, cls: 'link-btn', attrs: { type: 'button' } })]),
      renderBadge(request.status, REQUEST_STATUS[request.status]),
    ]),
    makeElement('p', { text: request.description, cls: 'card__desc' }),
    renderFields([['Мероприятие', event ? event.title : 'неизвестно']]),
    makeElement('footer', { cls: 'card__meta' }, [
      renderTime(request.createdAt),
      makeElement('span', { text: `Ответственный: ${request.assignee}` }),
      renderUrgency(SEVERITY_URGENCY[request.severity]),
      renderTags(request.tags),
    ]),
  ]);

const renderRequestList = (requestList, eventList) =>
  makeElement('ol', { cls: 'alerts' }, requestList.map((request, index) =>
    makeElement('li', {}, [renderRequestCard(request, eventList.find((e) => e.id === request.eventId), index)])));

const renderEventDetails = (event, relatedRequests) =>
  makeElement('section', { cls: 'details' }, [
    makeElement('p', { text: event.description }),
    renderFields([
      ['Статус', renderBadge(event.status, EVENT_STATUS[event.status])],
      ['Доступ', renderAccess(event.access)],
      ['Формат', FORMAT_LABELS[event.format]],
      ['Город', event.city],
      ['Площадка', event.venue],
      ['Начало', renderTime(event.startsAt)],
      ['Организатор', event.organizer],
      ['Билеты', `продано ${ticketsSold(event)} из ${ticketsTotal(event)}`],
    ]),
    renderMeter('Билеты', ticketsPercent(event)),
    renderMeter('Программа', event.programReady),
    makeElement('h3', { text: 'Спикеры' }),
    renderTextList(event.speakers, 'Спикеры пока не назначены.'),
    makeElement('h3', { text: 'Типы билетов' }),
    renderTextList(event.tickets.map((t) => `${t.name}: ${formatPrice(t.price)}, продано ${t.sold} из ${t.total}`), 'Билеты ещё не созданы.'),
    makeElement('h3', { text: 'Расписание' }),
    renderTextList(event.schedule.map((s) => `${s.time}: ${s.title} (${s.speaker})`), 'Расписание ещё не составлено.'),
    makeElement('h3', { text: 'Регистрации за последние 5 дней' }),
    makeElement('ol', { cls: 'history' }, event.registrationsHistory.map((value) => makeElement('li', { text: String(value) }))),
    makeElement('h3', { text: 'Запросы участников' }),
    relatedRequests.length
      ? makeElement('ul', { cls: 'related' }, relatedRequests.map((item) => makeElement('li', {}, [`${item.title} `, renderBadge(item.status, REQUEST_STATUS[item.status])])))
      : makeElement('p', { text: 'Запросов по этому мероприятию нет.', cls: 'card__desc' }),
    renderTags(event.tags),
  ]);

const renderRequestDetails = (request, event) =>
  makeElement('section', { cls: 'details' }, [
    makeElement('p', { text: request.description }),
    renderFields([
      ['Статус', renderBadge(request.status, REQUEST_STATUS[request.status])],
      ['Срочность', renderUrgency(SEVERITY_URGENCY[request.severity])],
      ['Мероприятие', event ? `${event.title} (${event.city})` : 'неизвестно'],
      ['Ответственный', request.assignee],
      ['Создан', renderTime(request.createdAt)],
      ['Закрыт', request.resolvedAt ? renderTime(request.resolvedAt) : 'ещё не закрыт'],
    ]),
    renderTags(request.tags),
  ]);

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const makeSvgElement = (tag, attrs) => {
  const node = document.createElementNS(SVG_NAMESPACE, tag);
  for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, value);
  return node;
};

const renderEmptyIcon = () => {
  const svg = makeSvgElement('svg', { viewBox: '0 0 64 64', fill: 'none', stroke: 'currentColor', 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', focusable: 'false' });
  svg.append(
    makeSvgElement('rect', { x: 8, y: 12, width: 48, height: 44, rx: 4 }),
    makeSvgElement('path', { d: 'M8 26h48M20 8v8M44 8v8' }),
  );
  return svg;
};

const renderEmpty = (title, hint) =>
  makeElement('div', { cls: 'empty' }, [renderEmptyIcon(), makeElement('p', { text: title, cls: 'empty__title' }), ...(hint ? [makeElement('p', { text: hint, cls: 'empty__hint' })] : [])]);

const skeletonBar = (width, height = 14) => makeElement('span', { cls: 'skeleton', attrs: { style: `width:${width};height:${height}px` } });
const renderSkeletonCard = () => makeElement('article', { cls: 'card card--skeleton' }, [skeletonBar('35%'), skeletonBar('70%', 22), skeletonBar('100%'), skeletonBar('100%'), skeletonBar('55%')]);

const renderSkeleton = (kind, count = 6) => {
  const cards = Array.from({ length: count }, renderSkeletonCard);
  const body = kind === 'summary'
    ? makeElement('ul', { cls: 'summary', attrs: { 'aria-hidden': 'true' } }, Array.from({ length: 4 }, () => makeElement('li', { cls: 'summary__item' }, [skeletonBar('60%', 32), skeletonBar('80%')])))
    : kind === 'list'
      ? makeElement('ol', { cls: 'alerts', attrs: { 'aria-hidden': 'true' } }, cards.map((card) => makeElement('li', {}, [card])))
      : makeElement('div', { cls: 'cards', attrs: { 'aria-hidden': 'true' } }, cards);
  return makeElement('div', {}, [makeElement('p', { text: 'Загрузка данных…', cls: 'sr-only' }), body]);
};

const renderPageItem = (label, page, { current = false, disabled = false, name } = {}) =>
  makeElement('li', {}, [disabled
    ? makeElement('span', { text: label, cls: 'page-link is-disabled', attrs: { 'aria-disabled': 'true' } })
    : makeElement('a', { text: label, cls: 'page-link', attrs: { href: `?page=${page}`, 'data-page': page, ...(name ? { 'aria-label': name } : {}), ...(current ? { 'aria-current': 'page' } : {}) } })]);

const renderPagination = (page, pages) =>
  makeElement('ul', { cls: 'pagination' }, [
    renderPageItem('Назад', page - 1, { disabled: page <= 1 }),
    ...Array.from({ length: pages }, (_, index) => renderPageItem(String(index + 1), index + 1, { current: index + 1 === page, name: `Страница ${index + 1}` })),
    renderPageItem('Вперёд', page + 1, { disabled: page >= pages }),
  ]);

const renderToast = (message, kind = 'info') =>
  makeElement('div', { cls: `toast toast--${kind}` }, [
    makeElement('p', { text: message, cls: 'toast__text' }),
    makeElement('button', { text: '\u00d7', cls: 'btn btn--ghost btn--icon toast__close', attrs: { type: 'button', 'aria-label': 'Закрыть уведомление' } }),
  ]);

const root = document.documentElement;
const THEMES = ['light', 'dark', 'contrast'];
const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FOCUSABLE_SELECTOR = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const storage = {
  get: (key) => { try { return localStorage.getItem(key); } catch { return null; } },
  set: (key, value) => { try { localStorage.setItem(key, value); } catch {} },
  remove: (key) => { try { localStorage.removeItem(key); } catch {} },
};

const hexToRgb = (hex) => {
  const match = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!match) return null;
  const number = parseInt(match[1], 16);
  return [(number >> 16) & 255, (number >> 8) & 255, number & 255];
};
const rgbToHex = ([r, g, b]) => `#${[r, g, b].map((channel) => channel.toString(16).padStart(2, '0')).join('')}`;
const relativeLuminance = ([r, g, b]) => {
  const linear = (channel) => { channel /= 255; return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
};
const textColorForAccent = (rgb) => (relativeLuminance(rgb) > 0.179 ? '#0b1320' : '#ffffff');

let themeTransitionTimer;
function withThemeTransition(change) {
  if (prefersReducedMotion()) { change(); return; }
  root.classList.add('theme-transition');
  change();
  clearTimeout(themeTransitionTimer);
  themeTransitionTimer = setTimeout(() => root.classList.remove('theme-transition'), 400);
}

const getSavedTheme = () => { const theme = storage.get('theme'); return THEMES.includes(theme) ? theme : 'auto'; };
const resolveTheme = (choice) => (choice === 'auto' ? (systemDarkMode.matches ? 'dark' : 'light') : choice);

function setTheme(choice) {
  if (choice === 'auto') storage.remove('theme'); else storage.set('theme', choice);
  withThemeTransition(() => root.setAttribute('data-theme', resolveTheme(choice)));
}

const readAccentFromCss = () => {
  const styles = getComputedStyle(root);
  return ['--accent-r', '--accent-g', '--accent-b'].map((name) => Number(styles.getPropertyValue(name)));
};

function setAccent(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return;
  const [r, g, b] = rgb;
  const textColor = textColorForAccent(rgb);
  withThemeTransition(() => {
    root.style.setProperty('--accent-r', r);
    root.style.setProperty('--accent-g', g);
    root.style.setProperty('--accent-b', b);
    root.style.setProperty('--on-accent', textColor);
  });
  storage.set('accent', JSON.stringify({ hex, r, g, b, on: textColor }));
}

function resetAccent() {
  withThemeTransition(() => ['--accent-r', '--accent-g', '--accent-b', '--on-accent'].forEach((name) => root.style.removeProperty(name)));
  storage.remove('accent');
}

function initTheme() {
  const themeSelect = document.getElementById('theme-select');
  const accentPicker = document.getElementById('accent');
  const accentHexOutput = document.getElementById('accent-hex');
  const accentResetButton = document.getElementById('accent-reset');
  const themeMenu = document.getElementById('theme-menu');

  const syncAccentPicker = () => {
    const customAccent = storage.get('accent');
    const hex = customAccent ? JSON.parse(customAccent).hex : rgbToHex(readAccentFromCss());
    accentPicker.value = hex;
    accentHexOutput.textContent = hex.toUpperCase();
    accentResetButton.disabled = !customAccent;
  };

  themeSelect.value = getSavedTheme();
  syncAccentPicker();

  themeSelect.addEventListener('change', () => { setTheme(themeSelect.value); syncAccentPicker(); });
  accentPicker.addEventListener('input', () => { setAccent(accentPicker.value); syncAccentPicker(); });
  accentResetButton.addEventListener('click', () => { resetAccent(); syncAccentPicker(); accentPicker.focus(); });

  systemDarkMode.addEventListener('change', () => {
    if (getSavedTheme() !== 'auto') return;
    withThemeTransition(() => root.setAttribute('data-theme', resolveTheme('auto')));
    syncAccentPicker();
  });

  document.addEventListener('click', (event) => { if (themeMenu.open && !themeMenu.contains(event.target)) themeMenu.open = false; });
  themeMenu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && themeMenu.open) { themeMenu.open = false; themeMenu.querySelector('summary').focus(); }
  });
}

const debounce = (callback, delay) => {
  let timeoutId;
  return (...args) => { clearTimeout(timeoutId); timeoutId = setTimeout(() => callback(...args), delay); };
};

function initTabs(tablist, onSelect) {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const selectTab = (selectedTab, focus = false) => {
    tabs.forEach((tab) => {
      const isActive = tab === selectedTab;
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });
    if (focus) selectedTab.focus();
    onSelect(selectedTab);
  };
  tablist.addEventListener('click', (event) => {
    const tab = event.target.closest('[role="tab"]');
    if (tab) selectTab(tab);
  });
  tablist.addEventListener('keydown', (event) => {
    const index = tabs.indexOf(document.activeElement);
    if (index < 0) return;
    const nextIndex = { ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index - 1 + tabs.length) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key];
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectTab(tabs[nextIndex], true);
  });
  selectTab(tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') ?? tabs[0]);
}

function createToastManager(container, { liveRegion, maxToasts = 3, lifetime = 4500 } = {}) {
  const supportsPopover = typeof container.showPopover === 'function';
  const removeToast = (toastNode) => {
    if (!toastNode.isConnected) return;
    toastNode.classList.add('is-leaving');
    setTimeout(() => {
      toastNode.remove();
      if (!container.children.length && supportsPopover) { try { container.hidePopover(); } catch {} }
    }, prefersReducedMotion() ? 0 : 200);
  };
  container.addEventListener('click', (event) => {
    const closeButton = event.target.closest('.toast__close');
    if (closeButton) removeToast(closeButton.closest('.toast'));
  });
  return (message, kind = 'info') => {
    while (container.children.length >= maxToasts) container.firstElementChild.remove();
    const toastNode = renderToast(message, kind);
    container.append(toastNode);
    if (supportsPopover) {
      try { if (container.matches(':popover-open')) container.hidePopover(); container.showPopover(); } catch {}
    }
    if (liveRegion) { liveRegion.textContent = ''; setTimeout(() => { liveRegion.textContent = message; }, 50); }
    setTimeout(() => removeToast(toastNode), lifetime);
  };
}

function createDialogController(dialog, { onClose } = {}) {
  let openerButton = null;
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog || event.target.closest('[data-close]')) dialog.close();
  });
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { event.preventDefault(); dialog.close(); return; }
    if (event.key !== 'Tab') return;
    const focusable = [...dialog.querySelectorAll(FOCUSABLE_SELECTOR)];
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  dialog.addEventListener('close', () => {
    root.classList.remove('scroll-locked');
    openerButton?.focus();
    onClose?.();
  });
  return {
    open(trigger) {
      openerButton = trigger ?? document.activeElement;
      root.classList.add('scroll-locked');
      dialog.showModal();
    },
    close: () => dialog.close(),
  };
}

function animateCounters(container, duration = 800) {
  container.querySelectorAll('[data-count]').forEach((node) => {
    const target = Number(node.dataset.count);
    if (prefersReducedMotion() || target === 0) { node.textContent = String(target); return; }
    const startTime = performance.now();
    node.textContent = '0';
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      node.textContent = String(Math.round(target * (1 - (1 - progress) ** 3)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function initEventForm(form, { getContext, onSubmit }) {
  const fields = [...form.querySelectorAll('[data-validate]')];
  const counter = form.querySelector('#f-description-count');
  const validationTimers = new Map();

  const updateCounter = () => { counter.textContent = `${form.elements.description.value.length} / 160`; };

  function showValidationResult(input, message) {
    const errorNode = form.querySelector(`#${input.id}-error`);
    errorNode.textContent = message;
    errorNode.hidden = !message;
    input.setAttribute('aria-invalid', String(Boolean(message)));
    input.classList.toggle('is-invalid', Boolean(message));
  }

  function validateField(input) {
    const message = validators[input.name](input.value, getContext());
    showValidationResult(input, message);
    return !message;
  }

  form.addEventListener('input', (event) => {
    const input = event.target.closest('[data-validate]');
    if (!input) return;
    if (input.name === 'description') updateCounter();
    clearTimeout(validationTimers.get(input));
    validationTimers.set(input, setTimeout(() => validateField(input), 350));
  });

  form.addEventListener('focusout', (event) => {
    const input = event.target.closest('[data-validate]');
    if (!input || event.relatedTarget?.closest?.('[data-close]')) return;
    clearTimeout(validationTimers.get(input));
    validateField(input);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const invalidFields = fields.filter((field) => !validateField(field));
    if (invalidFields.length) { invalidFields[0].focus(); return; }
    onSubmit(Object.fromEntries(new FormData(form)));
  });

  return {
    reset() {
      validationTimers.forEach((timerId) => clearTimeout(timerId));
      form.reset();
      fields.forEach((field) => showValidationResult(field, ''));
      updateCounter();
    },
  };
}

const byId = (id) => document.getElementById(id);
const PAGE_SIZE = 6;
const DEFAULT_SORT = { key: 'startsAt', dir: 'asc' };
const newestFirst = (a, b) => b.createdAt.localeCompare(a.createdAt);

function getPageFromUrl() {
  const page = Number(new URLSearchParams(location.search).get('page'));
  return Number.isInteger(page) && page > 0 ? page : 1;
}

const state = {
  query: '',
  status: 'all',
  format: 'all',
  access: new Set(['paid', 'free']),
  view: 'cards',
  sort: { ...DEFAULT_SORT },
  page: getPageFromUrl(),
  loaded: false,
};
let lastRenderKey = '';
let activeTab = null;

function syncPageInUrl(historyMethod) {
  const url = new URL(location.href);
  if (state.page > 1) url.searchParams.set('page', state.page); else url.searchParams.delete('page');
  if (url.href === location.href) return;
  try { history[historyMethod]({ page: state.page }, '', url); } catch {}
}

const showToast = createToastManager(byId('toasts'), { liveRegion: byId('live') });

function getSortValue(event, key) {
  if (key === 'format') return FORMAT_LABELS[event.format];
  if (key === 'access') return ACCESS_LABELS[event.access];
  return event[key];
}

function getVisibleEvents() {
  const query = state.query;
  return events
    .filter((event) => state.status === 'all' || event.status === state.status)
    .filter((event) => state.format === 'all' || event.format === state.format)
    .filter((event) => state.access.has(event.access))
    .filter((event) => !query || [event.title, event.description, event.city, event.venue, event.organizer, FORMAT_LABELS[event.format], ...event.speakers, ...event.tags].some((value) => value.toLowerCase().includes(query)))
    .sort((a, b) => {
      const first = getSortValue(a, state.sort.key), second = getSortValue(b, state.sort.key);
      const result = String(first).localeCompare(String(second), 'ru', { numeric: true });
      return state.sort.dir === 'asc' ? result : -result;
    });
}

function renderEvents({ focusSort, focusPage, force } = {}) {
  if (!state.loaded) return;
  const list = getVisibleEvents();
  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  state.page = Math.min(Math.max(1, state.page), pages);
  const pageItems = list.slice((state.page - 1) * PAGE_SIZE, state.page * PAGE_SIZE);

  byId('result-count').textContent = list.length
    ? `Найдено: ${list.length} из ${events.length}. Страница ${state.page} из ${pages}`
    : 'Ничего не найдено';
  byId('reset').disabled = !(state.query || state.status !== 'all' || state.format !== 'all' || state.access.size !== 2 || state.view !== 'cards');

  const renderKey = [state.view, state.sort.key, state.sort.dir, state.page, pages, pageItems.map((e) => e.id + e.status).join()].join('|');
  if (force || renderKey !== lastRenderKey) {
    lastRenderKey = renderKey;
    const view = !pageItems.length ? renderEmpty('Мероприятия не найдены', 'Измените запрос или сбросьте фильтры.')
      : state.view === 'cards' ? renderEventCards(pageItems) : renderEventsTable(pageItems, state.sort);
    byId('event-view').replaceChildren(view);
    byId('pagination').hidden = pages <= 1;
    byId('pagination').replaceChildren(...(pages > 1 ? [renderPagination(state.page, pages)] : []));
  }
  if (focusSort) byId('event-view').querySelector(`[data-sort="${focusSort}"]`)?.focus();
  if (focusPage) byId('pagination').querySelector('[aria-current="page"]')?.focus({ preventScroll: true });
}

function readFilters() {
  const form = byId('filters');
  state.query = byId('q').value.trim().toLowerCase();
  state.status = byId('status').value;
  state.format = byId('format').value;
  state.access = new Set([...form.querySelectorAll('input[name="access"]:checked')].map((input) => input.value));
  state.view = form.querySelector('input[name="view"]:checked').value;
}

function applyFilters() {
  readFilters();
  state.page = 1;
  syncPageInUrl('replaceState');
  renderEvents();
}
const applyFiltersDebounced = debounce(applyFilters, 200);

byId('filters').addEventListener('input', (event) => (event.target.id === 'q' ? applyFiltersDebounced() : applyFilters()));
byId('filters').addEventListener('reset', () => {
  state.sort = { ...DEFAULT_SORT };
  setTimeout(() => { applyFilters(); byId('q').focus(); }, 0);
});
byId('filters').addEventListener('submit', (event) => event.preventDefault());

byId('event-view').addEventListener('click', (event) => {
  const sortButton = event.target.closest('[data-sort]');
  if (!sortButton) return;
  const key = sortButton.dataset.sort;
  state.sort = { key, dir: state.sort.key === key && state.sort.dir === 'asc' ? 'desc' : 'asc' };
  renderEvents({ focusSort: key });
});

byId('pagination').addEventListener('click', (event) => {
  const link = event.target.closest('a[data-page]');
  if (!link) return;
  event.preventDefault();
  state.page = Number(link.dataset.page);
  syncPageInUrl('pushState');
  renderEvents({ focusPage: true });
  byId('events').scrollIntoView({ block: 'start' });
});
window.addEventListener('popstate', () => { state.page = getPageFromUrl(); renderEvents(); });

const countRequests = (status) => (status === 'all' ? supportRequests.length : supportRequests.filter((item) => item.status === status).length);

function renderRequestTab() {
  if (!state.loaded || !activeTab) return;
  const status = activeTab.dataset.status;
  const list = supportRequests.filter((item) => status === 'all' || item.status === status).sort(newestFirst);
  const panel = byId('tabpanel');
  panel.setAttribute('aria-labelledby', activeTab.id);
  panel.replaceChildren(list.length ? renderRequestList(list, events) : renderEmpty('Запросов нет', 'В этой категории пока ничего не найдено.'));
}

initTabs(byId('tablist'), (tab) => { activeTab = tab; renderRequestTab(); });

const detailDialog = createDialogController(byId('modal'));
let openedItem = null;

function openDetails(kind, id, trigger) {
  const body = byId('modal-body');
  if (kind === 'event') {
    const event = events.find((item) => item.id === id);
    byId('modal-title').textContent = event.title;
    body.replaceChildren(renderEventDetails(event, supportRequests.filter((r) => r.eventId === id)));
  } else {
    const request = supportRequests.find((item) => item.id === id);
    byId('modal-title').textContent = request.title;
    body.replaceChildren(renderRequestDetails(request, events.find((e) => e.id === request.eventId)));
  }
  openedItem = { id };
  detailDialog.open(trigger);
}

document.addEventListener('click', (event) => {
  if (event.target.closest('dialog')) return;
  const item = event.target.closest('[data-kind]');
  if (item && !item.classList.contains('card--skeleton')) openDetails(item.dataset.kind, item.dataset.id, item.querySelector('.link-btn'));
});

byId('modal-copy').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(openedItem.id); showToast(`ID ${openedItem.id} скопирован`, 'success'); }
  catch { showToast('Не удалось скопировать ID', 'error'); }
});

const formDialog = createDialogController(byId('form-modal'), { onClose: () => eventForm.reset() });
const eventForm = initEventForm(byId('event-form'), {
  getContext: () => ({ titles: events.map((e) => e.title.toLowerCase()) }),
  onSubmit: addEvent,
});
byId('add-event').addEventListener('click', (event) => formDialog.open(event.currentTarget));

function addEvent(data) {
  const nextNumber = Math.max(...events.map((e) => Number(e.id.slice(4)))) + 1;
  const id = `evt-${String(nextNumber).padStart(3, '0')}`;
  const title = data.title.trim();
  const formatLabel = FORMAT_LABELS[data.format];
  events.push({
    id, title,
    description: data.description.trim() || `Новое мероприятие (${formatLabel.toLowerCase()})`,
    format: data.format, status: 'draft', city: 'Не указан', venue: 'Уточняется',
    startsAt: new Date(`${data.date}T10:00:00+03:00`).toISOString(),
    organizer: data.email.trim(), access: 'free', programReady: 0,
    speakers: [], tickets: [], schedule: [], registrationsHistory: [0, 0, 0, 0, 0],
    tags: ['новое', formatLabel.toLowerCase()],
  });
  formDialog.close();
  const index = getVisibleEvents().findIndex((e) => e.id === id);
  if (index >= 0) { state.page = Math.floor(index / PAGE_SIZE) + 1; syncPageInUrl('pushState'); }
  showSummary();
  renderEvents({ force: true });
  showToast(`Мероприятие «${title}» добавлено как черновик`, 'success');
}

const BUSY_BLOCKS = ['summary', 'event-view', 'request-panel', 'tabpanel'];

function showSummary() {
  byId('summary').replaceChildren(renderSummary(events, supportRequests));
  animateCounters(byId('summary'));
}

function showSkeletons() {
  BUSY_BLOCKS.forEach((id) => byId(id).setAttribute('aria-busy', 'true'));
  byId('summary').replaceChildren(renderSkeleton('summary'));
  byId('event-view').replaceChildren(renderSkeleton('cards'));
  byId('request-panel').replaceChildren(renderSkeleton('list', 3));
  byId('tabpanel').replaceChildren(renderSkeleton('list', 3));
}

function finishLoading() {
  state.loaded = true;
  showSummary();
  byId('request-panel').replaceChildren(renderRequestList(supportRequests.filter((r) => r.status !== 'closed').sort(newestFirst), events));
  document.querySelectorAll('.tab').forEach((tab) => { tab.querySelector('.tab__count').textContent = countRequests(tab.dataset.status); });
  renderRequestTab();
  renderEvents({ force: true });
  syncPageInUrl('replaceState');
  BUSY_BLOCKS.forEach((id) => byId(id).setAttribute('aria-busy', 'false'));
}

const burgerButton = byId('burger');
const sidebar = byId('sidebar');
const isWideScreen = window.matchMedia('(min-width: 768px)');
const isMenuOpen = () => root.classList.contains('menu-open');

function setMenu(open, returnFocus = false) {
  root.classList.toggle('menu-open', open);
  burgerButton.setAttribute('aria-expanded', String(open));
  burgerButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  if (open) sidebar.querySelector('a').focus();
  else if (returnFocus) burgerButton.focus();
}

burgerButton.addEventListener('click', () => setMenu(!isMenuOpen(), true));
byId('overlay').addEventListener('click', () => setMenu(false, true));
sidebar.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && isMenuOpen()) setMenu(false, true); });
isWideScreen.addEventListener('change', (event) => { if (event.matches && isMenuOpen()) setMenu(false); });

initTheme();

const navLinks = [...sidebar.querySelectorAll('a[href^="#"]')];
const sectionObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    navLinks.forEach((link) => link.removeAttribute('aria-current'));
    sidebar.querySelector(`a[href="#${entry.target.id}"]`)?.setAttribute('aria-current', 'true');
  }
}, { rootMargin: '-30% 0px -60% 0px' });
document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));

readFilters();
showSkeletons();
setTimeout(finishLoading, 900);