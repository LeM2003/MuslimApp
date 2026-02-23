/* ================================================================
   MUSLIM APP — SYSTÈME DE LANGUES
   Français (fr) & Wolof (wo)
   ================================================================ */

var LANG = {
  /* ============================
     INTERFACE GÉNÉRALE
     ============================ */
  home_greeting_morning: {
    fr: '🌅 Bonjour',
    wo: '🌅 Jàmm nga fanaan'
  },
  home_greeting_afternoon: {
    fr: '☀️ Bon après-midi',
    wo: '☀️ Jàmm nga yendoo'
  },
  home_greeting_evening: {
    fr: '🌆 Bonsoir',
    wo: '🌆 Jàmm nga yendoo'
  },
  home_greeting_night: {
    fr: '🌙 Bonne nuit',
    wo: '🌙 Fanaanal jàmm'
  },
  app_tagline: {
    fr: 'Coran · Invocations · Dhikr',
    wo: 'Alkuraan · Ñaan · Dikr'
  },
  verse_of_day: {
    fr: '✦ Verset du jour ✦',
    wo: '✦ Aayatu bés bi ✦'
  },

  /* ============================
     FEATURE CARDS
     ============================ */
  card_quran_title: {
    fr: 'Le Coran',
    wo: 'Alkuraan gi'
  },
  card_quran_desc: {
    fr: 'Lisez et écoutez les 30 Juz et 114 Sourates',
    wo: 'Jàng te déglu 30 Juz ak 114 Surat yi'
  },
  card_duas_title: {
    fr: 'Invocations',
    wo: 'Ñaanal yi'
  },
  card_duas_desc: {
    fr: 'Duas et Adhkar du matin, soir, prière, repas...',
    wo: 'Ñaan yi ci suba, ngoon, julli, lekk...'
  },
  card_dhikr_title: {
    fr: 'Dhikr & Tasbih',
    wo: 'Dikr ak Tasbih'
  },
  card_dhikr_desc: {
    fr: 'Compteur de dhikr : SubhanAllah, Alhamdulillah...',
    wo: 'Waaraange dikr : SubhanAllah, Alhamdulillah...'
  },
  card_soon_title: {
    fr: 'Bientôt',
    wo: 'Ci kanam'
  },
  card_soon_desc: {
    fr: 'Horaires de prière, Tasbih, Qibla...',
    wo: 'Waxtu julli, Tasbih, Qibla...'
  },

  /* ============================
     SETTINGS
     ============================ */
  settings: {
    fr: '⚙️ Paramètres',
    wo: '⚙️ Tëralinu yi'
  },
  settings_reciter: {
    fr: 'Récitateur',
    wo: 'Kiy jàng Alkuraan bi'
  },
  settings_reciter_choose: {
    fr: 'Choisir le récitateur',
    wo: 'Tànn kiy jàng bi'
  },
  settings_translation: {
    fr: 'Traduction',
    wo: 'Tekki'
  },
  settings_translation_choose: {
    fr: 'Langue de traduction',
    wo: 'Làkku tekki bi'
  },
  settings_language: {
    fr: 'Langue de l\'application',
    wo: 'Làkku jëfandikukaay bi'
  },
  test_reciter: {
    fr: '🔊 Tester le récitateur',
    wo: '🔊 Siiwal kiy jàng bi'
  },
  test_stop: {
    fr: '⏹ Stop',
    wo: '⏹ Taxaw'
  },
  test_listening: {
    fr: '🔊 En cours d\'écoute...',
    wo: '🔊 Yaa ngi déglu...'
  },
  test_loading: {
    fr: '⏳ Chargement...',
    wo: '⏳ Yaa ngi yab...'
  },
  test_done: {
    fr: '✅ Test terminé',
    wo: '✅ Siiwal bi jeex na'
  },
  test_unavailable: {
    fr: '⚠️ Ce récitateur n\'est pas disponible',
    wo: '⚠️ Kiy jàng bii amul'
  },
  close: {
    fr: '✓ Fermer',
    wo: '✓ Tëj'
  },

  /* ============================
     STATS
     ============================ */
  stat_juz_read: {
    fr: 'Juz lus',
    wo: 'Juz yi nga jàng'
  },
  stat_surahs: {
    fr: 'Sourates',
    wo: 'Surat yi'
  },
  stat_verses: {
    fr: 'Versets',
    wo: 'Aaya yi'
  },
  stat_dhikr: {
    fr: 'Adhkar',
    wo: 'Dikr yi'
  },

  /* ============================
     QURAN PAGE
     ============================ */
  back_home: {
    fr: '← Accueil',
    wo: '← Dallu'
  },
  back_return: {
    fr: '← Retour',
    wo: '← Dellu'
  },
  noble_quran: {
    fr: 'Le Noble Coran',
    wo: 'Alkuraan bu sell bi'
  },
  progression: {
    fr: 'Progression',
    wo: 'Yeesalaat'
  },
  by_juz: {
    fr: '📖 Par Juz',
    wo: '📖 Ci Juz'
  },
  by_surah: {
    fr: '📋 Par Sourate',
    wo: '📋 Ci Surat'
  },
  search_surah: {
    fr: 'Rechercher une sourate...',
    wo: 'Seet ab Surat...'
  },
  read: {
    fr: '📖 Lire',
    wo: '📖 Jàng'
  },
  marked_read: {
    fr: '✓ Terminé',
    wo: '✓ Jeex na'
  },
  mark_read: {
    fr: '+ Lu',
    wo: '+ Jàng na'
  },
  listen: {
    fr: '▶ Écouter',
    wo: '▶ Déglu'
  },
  playing_now: {
    fr: '⏸ En cours',
    wo: '⏸ Yaa ngi dem'
  },
  verses: {
    fr: 'versets',
    wo: 'aaya'
  },
  meccan: {
    fr: '🕋 Mecquoise',
    wo: '🕋 Makka'
  },
  medinan: {
    fr: '🕌 Médinoise',
    wo: '🕌 Madiina'
  },

  /* ============================
     READER
     ============================ */
  resume_reading: {
    fr: 'Reprendre la lecture',
    wo: 'Gunni jàng bi'
  },
  continue: {
    fr: 'Continuer →',
    wo: 'Kontaan →'
  },
  verse: {
    fr: 'Verset',
    wo: 'Aaya'
  },
  font_size: {
    fr: 'Taille',
    wo: 'Dayoo'
  },
  prev_juz: {
    fr: '← Juz préc.',
    wo: '← Juz bi jiitu'
  },
  next_juz: {
    fr: 'Juz suiv. →',
    wo: 'Juz bi toftal →'
  },
  prev_surah: {
    fr: '← Sourate préc.',
    wo: '← Surat bi jiitu'
  },
  next_surah: {
    fr: 'Sourate suiv. →',
    wo: 'Surat bi toftal →'
  },

  /* ============================
     AUDIO PLAYER
     ============================ */
  repeat_on: {
    fr: '🔁 Répétition activée',
    wo: '🔁 Wàññi dees ko jéema'
  },
  repeat_off: {
    fr: '🔁 Désactivée',
    wo: '🔁 Fomm na'
  },

  /* ============================
     SHARE
     ============================ */
  share_verse: {
    fr: '📤 Partager ce verset',
    wo: '📤 Séddoo aaya bii'
  },
  share_copy: {
    fr: '📋 Copier',
    wo: '📋 Duppi'
  },
  share_copied: {
    fr: '📋 Verset copié !',
    wo: '📋 Aaya bi duppi na !'
  },

  /* ============================
     ERRORS
     ============================ */
  loading: {
    fr: 'Chargement...',
    wo: 'Yaa ngi yab...'
  },
  error_loading: {
    fr: 'Erreur de chargement',
    wo: 'Njuumte ci yab bi'
  },
  check_connection: {
    fr: 'Vérifiez votre connexion internet',
    wo: 'Seetal sa internet bi'
  },
  retry: {
    fr: '🔄 Réessayer',
    wo: '🔄 Jéemaat'
  },
  audio_error: {
    fr: '⚠️ Erreur audio',
    wo: '⚠️ Njuumte ci audio bi'
  },
  reciter_changed: {
    fr: '🎙️ Récitateur changé',
    wo: '🎙️ Kiy jàng bi soppiku na'
  },
  translation_changed: {
    fr: '🌍 Traduction changée',
    wo: '🌍 Tekki bi soppiku na'
  },
  translation_show: {
    fr: '🌍 Traduction affichée',
    wo: '🌍 Tekki bi fénn na'
  },
  translation_hide: {
    fr: '🌍 Masquée',
    wo: '🌍 Nëbb na'
  },
  juz_marked: {
    fr: '✓ Juz {n} marqué lu',
    wo: '✓ Juz {n} jàng nañu ko'
  },

  /* ============================
     DUAS PAGE
     ============================ */
  invocations_title: {
    fr: 'Invocations & Adhkar',
    wo: 'Ñaanal yi ak Dikr yi'
  },
  categories: {
    fr: '← Catégories',
    wo: '← Wàll yi'
  },
  texts: {
    fr: 'textes',
    wo: 'bind yi'
  },
  repeat_times: {
    fr: 'À répéter',
    wo: 'Wàññi ko'
  },

  /* ============================
     DHIKR PAGE
     ============================ */
  dhikr_title: {
    fr: 'Dhikr & Tasbih',
    wo: 'Dikr ak Tasbih'
  },
  completed: {
    fr: 'terminés',
    wo: 'jeex nañu'
  },
  reset: {
    fr: '🔄 Réinitialiser',
    wo: '🔄 Dooraat'
  },
  reset_all: {
    fr: '🔄 Réinitialiser tous les compteurs',
    wo: '🔄 Dooraat waaraange yi yépp'
  },
  reset_confirm: {
    fr: 'Réinitialiser tous les compteurs ?',
    wo: 'Dooraat waaraange yi yépp ?'
  },
  dhikr_done: {
    fr: '✅ BarakAllahu fik !',
    wo: '✅ BarakAllahu fiik !'
  },
  all_done_title: {
    fr: 'Tous les dhikr sont terminés !',
    wo: 'Dikr yi yépp jeex nañu !'
  },
  all_done_sub: {
    fr: 'Qu\'Allah accepte de nous et de vous.',
    wo: 'Yàlla nanu ko nangu ci nun ak yéen.'
  },

  /* ============================
     FOOTER
     ============================ */
  footer_credit: {
    fr: 'Sadaqa Jariya',
    wo: 'Sarax bu sore'
  },

  /* ============================
     DUAS CATEGORIES (Names)
     ============================ */
  cat_morning_adhkar: {
    fr: 'Adhkar du Matin',
    wo: 'Dikru suba si'
  },
  cat_evening_adhkar: {
    fr: 'Adhkar du Soir',
    wo: 'Dikru ngoon si'
  },
  cat_after_salah: {
    fr: 'Après la Prière',
    wo: 'Ginnaaw julli gi'
  },
  cat_sleep: {
    fr: 'Sommeil & Réveil',
    wo: 'Nelaw ak Xëy'
  },
  cat_food: {
    fr: 'Repas',
    wo: 'Lekk'
  },
  cat_travel: {
    fr: 'Voyage',
    wo: 'Tukki'
  },
  cat_protection: {
    fr: 'Protection',
    wo: 'Aar'
  },
  cat_forgiveness: {
    fr: 'Pardon & Repentir',
    wo: 'Baal ak Tuub'
  },
  cat_parents: {
    fr: 'Pour les Parents',
    wo: 'Ndey ak Baay'
  },
  cat_general: {
    fr: 'Duas du Coran',
    wo: 'Ñaanu Alkuraan'
  },

  /* ============================
     DUAS TRANSLATIONS (Wolof)
     ============================ */
  dua_morning_1: {
    fr: 'Ô Allah, c\'est par Toi que nous arrivons au matin...',
    wo: 'Yàlla, yaa nu suba, yaa nu ngoon, yaa nu dundal, yaa nu dee, te yaa nu ko dellu.'
  },
  dua_morning_2: {
    fr: 'Nous voilà au matin et le royaume appartient à Allah...',
    wo: 'Subaatu Yàlla la, te ñu ngi ko sant. Amul Yàlla ku dul Yàlla kenn, moom rekk, amul ay bokk, moom mooy Boroom nguuru bi, te moom mooy ñu sant...'
  },
  dua_protection_1: {
    fr: 'Ô Allah, je cherche refuge auprès de Toi contre les soucis...',
    wo: 'Yàlla, dama la di ñaan nga aar ma ci xel-xuul ak naqar, ak bañ-ci-mën ak naaxari yaram, ak ñaax ak ragal, ak bor ak njël ak ay nit ñu ma dàq.'
  },
  dua_parents: {
    fr: 'Seigneur, fais-leur miséricorde comme ils m\'ont élevé petit.',
    wo: 'Boroom bi, yërëmal leen ni ñu ma toggaloon bi ma woon tuuti.'
  },
  dua_forgiveness: {
    fr: 'Je demande pardon à Allah le Très Grand...',
    wo: 'Damay ñaan Yàlla mu baal ma, mu jot ma, moom mi nit amul, mooy dund gi ak taxawal gi...'
  }
};

/* ================================================================
   LANGUAGE SYSTEM
   ================================================================ */
function getCurrentLang() {
  return localStorage.getItem('q_lang') || 'fr';
}

function setLang(lang) {
  localStorage.setItem('q_lang', lang);
  return lang;
}

function t(key) {
  var lang = getCurrentLang();
  if (LANG[key]) {
    return LANG[key][lang] || LANG[key]['fr'] || key;
  }
  return key;
}

/* Get greeting based on time and language */
function getGreeting() {
  var h = new Date().getHours();
  if (h >= 5 && h < 12) return t('home_greeting_morning');
  if (h >= 12 && h < 17) return t('home_greeting_afternoon');
  if (h >= 17 && h < 21) return t('home_greeting_evening');
  return t('home_greeting_night');
}
