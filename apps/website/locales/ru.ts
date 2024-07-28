import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "Пожалуйста, поддержите нас, отключив свой блокировщик рекламы."
    }
  },
  component: {
    searchBar: {
      search: "Поиск",
      sortBy: "Сортировать по",
      searchPresence: "Поиск Presence",
      sort: {
        mostUsed: "Часто используемые",
        alphabetical: "По алфавиту"
      },
      categories: {
        all: "Всё",
        anime: "Аниме",
        games: "Игры",
        music: "Музыка",
        other: "Прочее",
        socials: "Соц. сети",
        videos: "Видео и стримы"
      }
    },
    browserCard: {
      wip: "В разработке",
      support: {
        safari: "Мы работаем над поддержкой Safari, следите за обновлениями!"
      }
    },
    userChip: {
      loading: "Загрузка..."
    },
    storeCard: {
      addPresence: "Добавить",
      removePresence: "Удалить"
    },
    donationModal: {
      title: "Небольшое одолжение...",
      description: "Мы надеемся, что вам понравится PreMiD! Если это вызывает улыбку на вашем лице, почему бы не ответить взаимностью? Наша команда волонтёров вкладывает душу в то, чтобы сделать его потрясающим только для вас!",
      continue: "Продолжить",
      close: "Закрыть",
      patreon: "Поддержка на {name}",
      github: "Спонсор на {name}",
      holdTight: "Держитесь крепче... загружаем волшебную кнопку..."
    }
  },
  header: {
    links: {
      contributors: "Участники",
      downloads: "Загрузки ",
      features: "Возможности",
      store: "Магазин"
    }
  },
  page: {
    users: {
      userPage: {
        title: "Вклады в Presence",
        error: {
          title: "Ошибка",
          description: "У нас возникла проблема с загрузкой этого пользователя... Пожалуйста, повторите попытку позже."
        }
      }
    },
    home: {
      meta: {
        title: "Главная страница"
      },
      title: "Улучшите Свой Онлайн Presence с PreMiD",
      subtitle: false,
      words: {
        music: "Музыка",
        videos: "Видеоролики",
        streams: false,
        media: false
      },
      description: "PreMiD — это простой и мощный инструмент, который позволяет вам делиться своей текущей активностью в медиа на нескольких платформах, таких как YouTube, Disney+, Netflix и т. д. Оставайтесь на связи и дайте своим друзьям увидеть, чем вы занимаетесь в реальном времени.",
      getStarted: "Давайте начнём",
      sections: {
        feature: {
          title: "Почему вы любите PreMiD",
          feature1: {
            title: "Контроль конфиденциальности",
            description: "Возьмите под контроль настройки конфиденциальности и решите, какими активностями вы делитесь с другими. Ваши данные — ваши правила."
          },
          feature2: {
            title: "Управляемый сообществом",
            description: "Опыт непревзойденной поддержки множества платформ, основанных на страстном и преданном сообществе."
          },
          feature3: {
            title: "Настраиваемые параметры",
            description: false
          },
          feature4: {
            title: false,
            description: false
          },
          feature5: {
            title: false,
            description: false
          },
          feature6: {
            title: false,
            description: false
          }
        },
        howItWorks: {
          title: false,
          step1: {
            title: false,
            description: false
          },
          step2: {
            title: false,
            description: false
          },
          step3: {
            title: false,
            description: false
          },
          step4: {
            title: false,
            description: false
          }
        },
        callToAction: {
          title: false,
          description: false,
          button: false
        }
      }
    },
    contributors: {
      title: "Участники",
      presenceDevelopers: "Разработчики Presence",
      staff: "Персонал",
      supporters: "Спонсоры",
      translators: "Переводчики",
      avatar: {
        tooltip: "Нажмите, чтобы скопировать аватар {name}"
      }
    },
    downloads: {
      title: "Загрузки ",
      steps: {
        install: "Установить расширение",
        login: "Войти через Discord",
        add: "Добавить Presence",
        showoff: "Хвастаться!"
      },
      section: {
        heading: {
          title: "Пришло время покрасоваться.",
          description: "Начните использовать PreMiD сейчас и покажите своим друзьям, чем вы занимаетесь, может быть, вы найдете кого-нибудь со схожими интересами.",
          getStarted: "Давайте начнём",
          extension: "Установить расширение"
        }
      },
      browser: {
        your: "Ваш браузер",
        other: "Другие браузеры",
        based: "На основе {browser}"
      },
      mobile: {
        title: "Плохие новости!",
        description: "PreMiD недоступен для мобильных устройств, приносим извинения!"
      },
      alphaAccess: {
        title: "Разблокируйте эксклюзивный доступ к Альфа!",
        description: "Шагните в будущее PreMiD, став Patron'ом или спонсором на GitHub. Ваша поддержка не только продвигает нашу разработку, но и дает вам доступ к самым инновационным функциям, которые мы создаем. Ознакомьтесь с современными решениями, которые может предложить PreMiD, и повлияйте на его путь с вашим отзывом. Это не о том, чтобы просто быть первым, а о том, чтобы быть частью чего-то большего.",
        callToAction: "Узнайте больше и присоединитесь к инновациям"
      },
      faq: "Часто Задаваемые Вопросы (FAQ)",
      faqs: {
        q1: {
          question: "Что такое PreMiD?",
          answer: "PreMiD — это простая настраиваемая утилита, которая позволяет вам показывать в статусе своей активности в Discord, чем вы занимаетесь в сети."
        },
        q2: {
          question: "Как мне использовать PreMiD?",
          answer: "Вы можете использовать PreMiD, установив расширение и войдя в свою учетную запись Discord. После входа в систему вы можете добавлять Presence'ы в свой профиль и хвастаться ими перед друзьями."
        },
        q3: {
          question: "PreMiD нарушает пользовательское соглашение Discord?",
          answer: "Нет, PreMiD не нарушает пользовательское соглашение Discord. PreMiD использует API Discord (включая закрытые точки API, предоставленные Discord) для настройки вашей активности. Это означает, что PreMiD полностью соответствует пользовательскому соглашению Discord."
        },
        q4: {
          question: "Какие сервисы поддерживает PreMiD?",
          answer: "PreMiD поддерживает множество различных сервисов, включая YouTube, Twitch и Netflix. Список поддерживаемых сервисов постоянно растет. Вы можете просмотреть полный список Presence на странице нашего магазина."
        },
        q5: {
          question: "Как я могу помочь в PreMiD?",
          answer: "Вы можете внести свой вклад в PreMiD, присоединившись к нашему сообществу на GitHub. Вы можете помочь, сообщая о проблемах, предлагая функции или дополняя код."
        },
        q6: {
          question: "Бесплатно ли использование PreMiD?",
          answer: "Да, PreMiD является бесплатным в использовании. Однако, мы принимаем пожертвования через Patreon и GitHub Sponsors, чтобы помочь в разработке проекта."
        },
        q7: {
          question: "Что делать, если я столкнулся с проблемой в PreMiD?",
          answer: "Если вы столкнулись с проблемами с PreMiD, вы можете присоединиться к нашему серверу Discord для поддержки. У нас также есть руководство по устранению неполадок в нашей документации."
        },
        q8: {
          question: "PreMiD не поддерживает xyz, можете ли вы добавить его?",
          answer: "Наши так называемые Presence создаются сообществом, у нас нет ресурсов для добавления каждой отдельной платформы. Однако, вы можете добавить свой собственный Presence, следуя инструкциям по нашей документации."
        },
        q9: {
          question: "Как часто обновляется PreMiD?",
          answer: "Мы являемся небольшим проектом на добровольной основе, стремимся как можно чаще обновлять PreMiD, но не можем обещать, что всегда будем на вершине."
        }
      }
    },
    store: {
      title: "Магазин",
      noPresence: "Не найдено Presence по вашему запросу...",
      presence: {
        button: {
          reportIssue: "Сообщить о проблеме",
          suggestFeature: "Предложить улучшение",
          viewCode: "Посмотреть код"
        },
        title: {
          description: "Описание",
          information: "Информация"
        },
        informationSection: {
          contributors: "Участники:",
          version: "Версия: {version}",
          users: "Пользователей: {users}",
          tags: "Метки:",
          supportedUrls: "Поддерживаемые ссылки:"
        }
      },
      header: {
        categories: "Категории",
        search: "Поиск Presence"
      }
    }
  },
  footer: {
    partners: "Партнеры",
    followUs: "Подпишитесь на нас",
    supportUs: "Поддержите нас",
    more: "Подробнее",
    legal: false,
    supportList: {
      donate: "Пожертвовать",
      contribute: "Внести вклад",
      translate: "Перевести"
    },
    moreList: {
      faq: false,
      documentation: "Документация",
      status: "Состояние"
    },
    legalList: {
      privacyPolicy: "Политика конфиденциальности",
      termsOfService: "Пользовательское Соглашение",
      cookiePolicy: "Политика куки"
    },
    withLoveBy: "С",
    by: "от",
    copyright: "© {year}-{currentYear} {company} Все права защищены."
  },
  error: {
    404: {
      title: false,
      message: "Страница, которую вы ищете, не существует."
    },
    500: {
      title: false,
      message: "Что-то пошло не так с нашей стороны."
    },
    default: {
      title: "Ошибка",
      message: "Что-то пошло не так с нашей стороны.",
      button: "Вернуться назад"
    }
  }
}));