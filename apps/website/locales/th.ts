import { defineI18nLocale } from false;
export default defineI18nLocale(() => ({
  layout: {
    ads: {
      error: "โปรดสนับสนุนทีมงานโดยการปิดตัวบล๊อกโฆษณา"
    }
  },
  component: {
    searchBar: {
      search: "ค้นหา",
      sortBy: "เรียงตาม",
      searchPresence: "ค้นหา Presence",
      sort: {
        mostUsed: "ใช้มากที่สุด",
        alphabetical: "ตามตัวอักษร"
      },
      categories: {
        all: "ทั้งหมด",
        anime: "อนิเมะ",
        games: "เกม",
        music: "เพลง",
        other: "อื่นๆ",
        socials: "โซเชียล",
        videos: "วีดีโอและสตรีมมิ่ง"
      }
    },
    browserCard: {
      wip: "กำลังอยู่ในการพัฒนา",
      support: {
        safari: "ทางทีมงานกำลังพัฒนาให้รองรับ Safari โปรดติดตามข่าวสารต่อไป"
      }
    },
    userChip: {
      loading: "กำลังโหลด…..."
    },
    storeCard: {
      addPresence: "เพิ่ม",
      removePresence: "ลบ"
    },
    donationModal: {
      title: "ขอช่วยอะไรหน่อยสิ...",
      description: "เราหวังว่าคุณจะหลังรัก PreMiD! ถ้ามันทำให้คุณยิ้มได้ ทำไมไม่ลองส่งความรักกลับมาบ้างล่ะ? ทีมอาสาสมัครของพวกเราทุ่มเทสร้างมันขึ้นมาเพื่อคุณโดยเฉพาะ!",
      continue: "ดำเนินการต่อ",
      close: "ปิด",
      patreon: "สนับสนุนทาง {name}",
      github: "สนับสนุนทาง {name}",
      holdTight: "รอแป๊บนะ... กำลังโหลดปุ่มวิเศษ..."
    }
  },
  header: {
    links: {
      contributors: "ผู้พัฒนา",
      downloads: "ดาวน์โหลด",
      features: "ฟีเจอร์",
      store: "ร้านค้า"
    }
  },
  page: {
    users: {
      userPage: {
        title: "ผู้ร่วมพัฒนา Presence",
        error: {
          title: "เกิดข้อผิดพลาด",
          description: "กำลังมีปัญหาในการโหลดผู้ใช้นี้ โปรดลองใหม่อีกครั้งในภายหลัง"
        }
      }
    },
    home: {
      meta: {
        title: "หน้าหลัก"
      },
      title: "ยกระดับการแสดงออกบนโลกออนไลน์ของคุณด้วย PreMiD",
      subtitle: false,
      words: {
        music: "เพลง",
        videos: "วีดีโอ",
        streams: "สตรีม",
        media: "มีเดีย"
      },
      description: "PreMiD เป็นเครื่องมือที่ง่ายและทรงพลัง ช่วยให้คุณแชร์กิจกรรมสื่อที่กำลังทำอยู่บนหลายแพลตฟอร์ม เช่น YouTube, Disney+, Netflix และอื่นๆ ให้เพื่อนๆ เห็นว่าคุณกำลังทำอะไรอยู่แบบเรียลไทม์",
      getStarted: "เริ่มใช้งาน",
      sections: {
        feature: {
          title: "ทำไมคุณจะหลงรัก PreMiD",
          feature1: {
            title: "ควบคุมความเป็นส่วนตัว",
            description: "ควบคุมการตั้งค่าความเป็นส่วนตัวของคุณเอง และตัดสินใจว่าจะแชร์กิจกรรมอะไรกับคนอื่นๆ, ข้อมูลของคุณ กฎของคุณ."
          },
          feature2: {
            title: "ขับเคลื่อนโดยพวกคุณทุกๆคน",
            description: "สัมผัสการสนับสนุนที่เหนือกชั้นสำหรับแพลตฟอร์มมากมาย ผลงานของพวกคุณที่เต็มไปด้วยความรักและความทุ่มเท"
          },
          feature3: {
            title: "ปรับแต่งการตั้งค่าได้",
            description: "ปรับแต่งประสบการณ์ในการใช้ PreMiD ของคุณด้วยตัวเลือกการปรับแต่งที่ครอบคลุม เพื่อให้เหมาะกับความชอบและความต้องการของคุณ"
          },
          feature4: {
            title: "การตั้งค่าที่ง่าย",
            description: "เริ่มต้นใช้งาน PreMiD ได้ทันทีทันใจ กระบวนการตั้งค่าที่ง่ายดายของเราช่วยให้คุณเริ่มใช้งานได้อย่างไม่มีปัญหา"
          },
          feature5: {
            title: "สอดคล้องกับข้อกำหนดการใช้งานของ Discord",
            description: "สอดคล้องกับข้อกำหนดการใช้งานของ Discord อย่างเต็มรูปแบบ โดยใช้ endpoint ทางการที่ Discord ให้มา"
          },
          feature6: {
            title: "ฟีเจอร์ในอนาคต",
            description: "ติดตามฟีเจอร์ใหม่และการปรับปรุงที่น่าตื่นเต้นที่จะยกระดับประสบการณ์ในการใช้ PreMiD ของคุณให้ดียิ่งขึ้น"
          }
        },
        howItWorks: {
          title: "มันทำงานอย่างไร",
          step1: {
            title: "ติดตั้งส่วนขยาย",
            description: "เพิ่ม PreMiD ลงในเบราว์เซอร์ของคุณ"
          },
          step2: {
            title: "เข้าสู่ระบบด้วย Discord",
            description: "เชื่อมต่อ PreMiD กับบัญชี Discord ของคุณ"
          },
          step3: {
            title: "เพิ่มบริการ",
            description: "เลือกบริการที่คุณต้องการแสดง เช่น YouTube, Disney+ และอื่นๆ"
          },
          step4: {
            title: "ขอให้สนุก",
            description: "แชร์กิจกรรมของคุณและสนุกไปกับการใช้ PreMiD"
          }
        },
        callToAction: {
          title: "พร้อมที่จะเริ่มหรือยัง?",
          description: "ร่วมเป็นหนึ่งในผู้ใช้ {count} คนที่หลงรัก PreMiD แล้ว",
          button: "เริ่มตอนนี้"
        }
      }
    },
    contributors: {
      title: "ผู้พัฒนา",
      presenceDevelopers: "นักพัฒนา Presence",
      staff: "ทีมงาน",
      supporters: "ผู้สนับสนุน",
      translators: "แปลภาษา",
      avatar: {
        tooltip: "คลิกเพื่อคัดลอกอวาตาร์ของ {name}"
      }
    },
    downloads: {
      title: "ดาวน์โหลด",
      steps: {
        install: "ติดตั้งส่วนขยาย",
        login: "เข้าสู่ระบบด้วย Discord",
        add: "เพิ่ม Presence",
        showoff: "โม้เพื่อน!"
      },
      section: {
        heading: {
          title: "ถึงเวลาเฉิดฉายแล้ว!",
          description: "เริ่มต้นการใช้ PreMiD ตอนนี้และบอกให้คนอื่นรู้ว่าคุณกำลังดูหรือฟังอะไรอยู่ เผื่อว่าคุณอาจจะเจอที่ถูกคอกันก็ได้นะ",
          getStarted: "เริ่มใช้งาน",
          extension: "ส่วนขยาย"
        }
      },
      browser: {
        your: "เบราว์เซอร์ของคุณ",
        other: "เบราว์เซอร์อื่นๆ",
        based: "ฐาน {browser}"
      },
      mobile: {
        title: "ข่าวร้าย!",
        description: "PreMiD ยังไม่รองรับอุปกรณ์มือถือ ขออภัยค่ะ!"
      },
      alphaAccess: {
        title: "ปลดล็อกการเข้าถึง Alpha แบบเอ็กซ์คลูซีฟ!",
        description: false,
        callToAction: false
      },
      faq: "คำถามที่พบบ่อย",
      faqs: {
        q1: {
          question: "PreMiD คืออะไร?",
          answer: false
        },
        q2: {
          question: false,
          answer: false
        },
        q3: {
          question: "PreMiD ละเมิดข้อกำหนดการใช้งานของ Discord หรือไม่?",
          answer: "ไม่ค่ะ PreMiD ไม่ละเมิดข้อกำหนดการใช้งานของ Discord PreMiD ใช้ API ของ Discord (รวมถึง Private API ที่ Discord อนุญาตให้เราใช้) เพื่อตั้งค่ากิจกรรมของคุณ ซึ่งหมายความว่า PreMiD ปฏิบัติตามข้อกำหนดการใช้งานของ Discord อย่างเต็มที่"
        },
        q4: {
          question: "บริการไหนบ้างที่ PreMiD รองรับ?",
          answer: "PreMiD รองรับบริการต่างๆ มากมาย รวมถึง YouTube, Twitch และ Netflix รายการบริการที่รองรับเติบโตขึ้นเรื่อยๆ คุณสามารถดูรายการ Presence ทั้งหมดได้ที่หน้าร้านค้าของเรา"
        },
        q5: {
          question: "จะช่วยสนับสนุน PreMiD ได้ยังไง?",
          answer: "คุณสามารถร่วมสนับสนุน PreMiD ได้โดยเข้าร่วมชุมชนของเราบน GitHub คุณสามารถช่วยเหลือได้โดยการรายงานปัญหา แนะนำฟีเจอร์ หรือร่วมพัฒนาโค้ด"
        },
        q6: {
          question: "PreMiD ใช้ฟรีหรือเปล่า?",
          answer: "PreMiD ใช้ฟรีค่ะ แต่เรายินดีรับเงินบริจาคผ่าน Patreon และ GitHub Sponsors เพื่อสนับสนุนการพัฒนาต่อไปค่ะ"
        },
        q7: {
          question: "ถ้าเจอปัญหากับ PreMiD ควรทำยังไง?",
          answer: "ถ้าคุณเจอปัญหาใดๆ กับ PreMiD สามารถเข้าร่วมเซิฟเวอร์ Discord ของเราเพื่อขอความช่วยเหลือได้ค่ะ แล้วก็เรามีคู่มือแก้ไขปัญหาเบิ้องต้นใน docs ด้วยนะ"
        },
        q8: {
          question: "PreMiD ไม่รองรับ xyz, ช่วยเพิ่มได้ไหม?",
          answer: "สิ่งที่เราเรียกว่า Presence นั้นขับเคลื่อนโดยชุมชนโอเพนซอร์ส เราไม่มีทรัพยากรพอที่จะเพิ่มทุกแพลตฟอร์ม แต่ถ้าอยากเพิ่ม Presence เองก็สามารถทำได้เพียงแค่ทำตามแนะนำใน docs ของเราค่ะ"
        },
        q9: {
          question: "PreMiD อัพเดทบ่อยแค่ไหน?",
          answer: "เราเป็นโปรเจกต์เล็กๆ ที่ขับเคลื่อนด้วยอาสาสมัคร ทีมงานตั้งใจว่าจะอัปเดต PreMiD ให้บ่อยที่สุดเท่าที่จะทำได้ แต่ทางเราไม่สามารถสัญญาได้ว่าจะสามารถแก้ไขปัญหาทุกอย่างได้ทันที"
        }
      }
    },
    store: {
      title: "ร้านค้า",
      noPresence: "ไม่มี Presence ที่ตรงกับคำค้นหาของคุณ...",
      presence: {
        button: {
          reportIssue: "รายงานปัญหา",
          suggestFeature: "เสนอแนะฟีเจอร์",
          viewCode: "ดูซอร์สโค้ด"
        },
        title: {
          description: "คำอธิบาย",
          information: "ข้อมูล"
        },
        informationSection: {
          contributors: "ผู้ร่วมพัฒนา:",
          version: "เวอร์ชั่น: {version}",
          users: "จำนวนผู้ใช้: {users}",
          tags: "แท็ก:",
          supportedUrls: "URL ที่รองรับ:"
        }
      },
      header: {
        categories: "หมวดหมู่",
        search: "ค้นหา Presence"
      }
    }
  },
  footer: {
    partners: "ผู้ร่วมมือ",
    followUs: "ติดตามเรา",
    supportUs: "สนับสนุนเรา",
    more: "อื่น ๆ",
    legal: "กฎหมาย",
    supportList: {
      donate: "บริจาค",
      contribute: "เว็บไซต์",
      translate: "แปลภาษา"
    },
    moreList: {
      faq: "คำถามที่พบบ่อย",
      documentation: "เอกสารประกอบ",
      status: "สถานะ"
    },
    legalList: {
      privacyPolicy: "นโยบายความเป็นส่วนตัว",
      termsOfService: "เงื่อนไขการใช้บริการ",
      cookiePolicy: "นโยบายเกี่ยวกับคุกกี้"
    },
    withLoveBy: "ด้วย",
    by: "โดย",
    copyright: "©️ {year}-{currentYear} {company} สงวนลิขสิทธิ์."
  },
  error: {
    404: {
      title: false,
      message: "ไม่มีหน้าที่คุณกำลังมองหา"
    },
    500: {
      title: false,
      message: "มีบางอย่างผิดพลาดในด้านของเรา"
    },
    default: {
      title: "เกิดข้อผิดพลาด",
      message: "มีบางอย่างผิดพลาดในด้านของเรา",
      button: "ย้อนกลับ"
    }
  }
}));