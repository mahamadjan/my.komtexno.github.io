// Массивы с названиями групп для каждого курса
const groupNames = {
    1: [
      'ПИМ-1-24', 'ПОВТ-1-24', 'ПОВТ-2-24', 'ПОВТ-3-24', 'ПОВТ-4-24', 'ПОАС-1-24',
      'ПОАС-2-24', 'ДПО-1-24', 'ДПО-2-24', 'ПИ-1-24', 'ПИ-2-24', 'ЭУБД-1-24',
       
       
    ],
    2: [
      'ПОВТ-1-23', 'ПОВТ-2-23', 'ПОВТ-3-23', 'ПОВТ-4-23', 'ИСТ-5-24', 'ПОАС-1-23',
      'ПОАС-2-23', 'ПОАС-3-23', 'ПОАС-4-24', 'ДПО-1-23', 'ДПО-2-23', 'ДПО-3-23',
      'ПИ-1-23', 'ПИ-2-23', 'ПИ-3-23', "АСОИ-ТОС-1-21", "ЭУБД-1-22",
    ],
    3: [
      'ФИЗ_3-01', 'ФИЗ_3-02', 'ФИЗ_3-03', 'ФИЗ_3-04', 'ФИЗ_3-05', 'ФИЗ_3-06',
      'ФИЗ_3-07', 'ФИЗ_3-08', 'ФИЗ_3-09', 'ФИЗ_3-10', 'ФИЗ_3-11', 'ФИЗ_3-12',
      'ФИЗ_3-13', 'ФИЗ_3-14', 'ФИЗ_3-15'
    ]
  };
  
  // Данные расписания для каждого курса и группы
  const scheduleData = {
    1: {
      group1    : {
        понидельник: [
          { subject: '1)  Культура речи  - 07:30',  teacher: 'Омуркулова Г.М.', room: '413  ',  },
          { subject: '2) Курвторский час - 09:00', teacher: 'Каныбеков М.О.', room: '426   ' },
          { subject: '3) Мировая история - 10:30', teacher: 'Ибраимова А.Т.', room: '418' },
          { subject: '4) Кыргыз тил - 12:10', teacher: 'Шапкулова А.А', room: '405 ' }
        ],
        вторник: [
          { subject: '07:30', teacher: '',  room: 'пары нету' },
          { subject: 'Frontend - 09:00', teacher: 'Шаршебаев А.М.', room: '406' },
          { subject: 'Физика - 10:30', teacher: 'Нарманбетова Г.Ж.', room: '338' },
          { subject: 'Язык програмирования - 12:10', teacher: 'Исхакова Г.А.', room: '408' }
         
        ],
        среда: [
          { subject: 'Астрономия - 07:30', teacher: 'Нарманбетова Г.Ж.', room: '338' },
          { subject: 'Физ.культура - 09:00', teacher: 'Алымкулов К.К.', room: 'сп.зал' },
          { subject: 'Кыргыз адабияты - 10:30', teacher: 'Шапкулова А.А.', room: '411' },
          { subject: '12:10', teacher: '', room: 'Пары нету' }
        ],
        четверг:[
          { subject: 'Математика - 07:30', teacher: 'Сариева Ф.С.', room: '409' },
          { subject: 'Backend - 09:00', teacher: 'Кыдырмышев А.Б.', room: '406' },
          { subject: 'Начальная военная подготовка - 10:30', teacher: 'Эсенов Ч.Т.', room: '2/203' },
          { subject: '12:10', teacher: '', room: 'Пары нету' }
          
        ],
        пятница:[
          { subject: 'Основы экономики,менежмента и марткетинга в IT - 07:30', teacher: 'Каныбеков М.О.', room: '406' },
          { subject: 'Иностранный язык - 09:00', teacher: 'Балбаева Э.К.', room: '412' },
          { subject: 'Человек и общество - 10:30', teacher: 'Иманалиева А.Дж.', room: '411' },
          { subject: 'Матикатика - 12:10', teacher: 'Сариева Ф.С.', room: '409' }
        
        ]
      },
      group2: { monday: [{ subject: 'Информати', teacher: 'Иванов И.И.', room: '101' }] },
      group3: { monday: [{ subject: 'Физика', teacher: 'Петров П.П.', room: '102' }] },
      // Добавьте остальные группы для 1 курса
    },
    2: {
      group1: { monday: [{ subject: 'Математика', teacher: 'Петров П.П.', room: '115' }] },
      group2: { monday: [{ subject: 'Информатика', teacher: 'Смирнов С.С.', room: '116' }] },
      // Добавьте остальные группы для 2 курса
    },
    
    3: {
      group1: { monday: [{ subject: 'Физика', teacher: 'Иванов И.И.', room: '120' }] },
      group2: { monday: [{ subject: 'Математика', teacher: 'Михайлова М.М.', room: '121' }] },
      // Добавьте остальные группы для 3 курса
    }
  };
  
  // Главная страница (выбор курса)
  const courseButtons = document.querySelectorAll('.course-btn');
  
  courseButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCourse = button.dataset.course;
      window.location.href = `groups.html?course=${selectedCourse}`;
    });
  });
  
  // Страница выбора группы
  function displayGroups(course) {
    const groupButtonsContainer = document.getElementById('group-buttons');
    const groupTitle = document.getElementById('group-title');
  
    groupTitle.textContent = ` ${course} курс`;
  
    // Получаем группы для выбранного курса
    const groups = groupNames[course];
  
    // Генерация кнопок для групп
    groups.forEach((groupName, index) => {
      const groupButton = document.createElement('button');
      groupButton.textContent = groupName;  // Используем название группы из массива
      groupButton.classList.add('group-btn');
      groupButton.addEventListener('click', () => {
        window.location.href = `schedule.html?course=${course}&group=group${index + 1}`;
      });
      groupButtonsContainer.appendChild(groupButton);
    });
  }
  
  // Страница расписания
  function displaySchedule(course, group) {
    const schedule = scheduleData[course][group];
    const scheduleContainer = document.getElementById('schedule');
    const courseTitle = document.getElementById('course-title');
  
    // Очистка контейнера
    scheduleContainer.innerHTML = '';
  
    if (schedule) {
      // Получаем название группы из массива groupNames
      const groupName = groupNames[course][parseInt(group.replace('group', '')) - 1];  // Получаем название группы
  
      courseTitle.textContent = `Расписание для ${groupName}`;
  
      Object.keys(schedule).forEach(day => {
        const dayContainer = document.createElement('div');
        dayContainer.classList.add('day');
  
        const dayTitle = document.createElement('h3');
        dayTitle.textContent = day.charAt(0).toUpperCase() + day.slice(1);
        dayContainer.appendChild(dayTitle);
  
        schedule[day].forEach(pair => {
          const pairElement = document.createElement('div');
          pairElement.classList.add('subject');
  
          const subjectTitle = document.createElement('div');
          subjectTitle.textContent = pair.subject;
          pairElement.appendChild(subjectTitle);
  
          const teacherRoom = document.createElement('div');
          teacherRoom.classList.add('teacher-room');
          teacherRoom.textContent = `${pair.teacher}, Кабинет: ${pair.room}`;
          pairElement.appendChild(teacherRoom);
  
          dayContainer.appendChild(pairElement);
        });
  
        scheduleContainer.appendChild(dayContainer);
      });
    } else {
      scheduleContainer.innerHTML = 'Расписание не найдено.';
    }
  }
  
  // Получаем курс и группу из URL
  const urlParams = new URLSearchParams(window.location.search);
  const course = urlParams.get('course');
  const group = urlParams.get('group');
  
  // Если на странице выбора группы
  if (course && !group) {
    displayGroups(course);
  }
  
  // Если на странице расписания
  if (course && group) {
    displaySchedule(course, group);
  }
  
  // Функция для возврата на главную страницу
  function goBack() {
    window.location.href = 'index.html';
  }
  
  function confirmDays() {
    const form = document.getElementById('days-form');
    const selectedDays = Array.from(form.elements.days)
        .filter(day => day.checked)
        .map(day => day.value);
    alert('Вы выбрали: ' + selectedDays.join(', '));
  }
  
  
  