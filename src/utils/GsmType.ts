
export type Gsm = {
  _scale?: number,
  _lang?: string,
  audio: {
    captureTab: string,
    releaseTab: string,
    split: string,
    reverse: string
  },
  warnings: {
    unusedGlobal: string,
    selectTooltip: string,
    sliderTooltip: string,
    captureRequired: string
  },
  menuLabels: {
    invertPage: string,
    grayscalePage: string,
    videoBrightness: string,
    videoContrast: string
  },
  token: {
    create: string,
    reset: string,
    duplicate: string,
    delete: string,
    pinTooltip: string,
    mergeBoth: string,
    min: string,
    max: string,
    on: string,
    off: string,
    toggle: string,
    element: string,
    backdrop: string,
    both: string,
    query: string,
    queryTooltip: string,
    intoPane: string,
    warning: string,
    filters: string,
    transforms: string,
    blockEvents: string,
    blockEventsTooltip: string,
    color: string,
    size: string,
    rounding: string,
    duration: string,
    offset: string,
    position: string,
    center: string,
    topLeft: string,
    topRight: string,
    bottomLeft: string,
    bottomRight: string,
    animation: string,
    default: string,
    static: string,
    shrink: string,
    implode: string,
    rotate: string,
    rows: string,
    replaceWith: string,
    invalidNumber: string,
    openPage: string,
    seconds: string,
    percent: string,
    frames: string,
    more: string,
    assign: string,
    none: string,
    edit: string,
    customize: string
  },
  placer: {
    windowBounds: {
      left: string,
      top: string,
      width: string,
      height: string
    },
    windowSize: string,
    windowPrompt: string,
    apply: string,
    cancel: string
  },
  filter: {
    grayscale: string,
    sepia: string,
    hueRotate: string,
    contrast: string,
    brightness: string,
    saturate: string,
    invert: string,
    blur: string,
    opacity: string,
    scaleX: string,
    scaleY: string,
    translateX: string,
    translateY: string,
    rotateX: string,
    rotateY: string,
    rotateZ: string
  },
  command: {
    nothing: string,
    nothingTooltip: string,
    runCode: string,
    openUrl: string,
    speed: string,
    speedChangesPitch: string,
    pin: string,
    state: string,
    seek: string,
    pause: string,
    mute: string,
    volume: string,
    setMark: string,
    seekMark: string,
    loop: string,
    loopTooltip: string,
    autoBreak: string,
    autoBreakTooltip: string,
    autoBreakTooltipAlt: string,
    fullscreen: string,
    nativeTooltip: string,
    PiP: string,
    fxState: string,
    fxReset: string,
    fxSwap: string,
    fxFilter: string,
    afxPitch: string,
    afxGain: string,
    afxDelay: string,
    afxPan: string,
    afxMono: string,
    afxCapture: string,
    afxReset: string,
    relativeToSpeed: string,
    showNet: string,
    drawPage: string,
    fastSeek: string,
    fastSeekTooltip: string,
    mediaInfo: string,
    intoPopup: string,
    intoPopupTooltip: string,
    skip: string,
    skipTooltip: string,
    cinema: string,
    cinemaTooltip: string,
    presets: string,
    temporarySpeed: string,
    temporarySpeedTooltip: string,
    toggleSpeed: string,
    toggleSpeedTooltip: string,
    alwaysOn: string,
    alwaysOnTooltip: string
  },
  options: {
    flags: {
      header: string,
      qrCodeTop: string,
      qrCodeBottom: string,
      language: string,
      _languageTooltip?: string,
      darkTheme: string,
      showBadge: string,
      showBadgeTooltip: string,
      showMediaView: string,
      showIndicator: string,
      showIndicatorTooltip: string,
      ghostMode: string,
      ghostModeTooltip: string,
      pinByDefault: string,
      pinByDefaultTooltip: string,
      initialState: string,
      previousTab: string,
      globalContext: string,
      previousContext: string,
      newContext: string,
      customContext: string,
      customContextTooltip: string,
      jsShortcutWarning: string,
      jsRuleWarning: string,
      jsRuleWarningAlt: string,
      keyboardInput: string,
      keyboardInputTooltip: string,
      qwerty: string,
      virtual: string,
      grantPermission: string,
      grantPermissionTooltip: string,
      speedSlider: string,
      textSize: string,
      speedPresets: string,
      widget: {
        option: string,
        optionTooltip: string,
        movementMobile: string,
        movementDesktop: string,
        headerTooltip: string,
        showIcon: string,
        showIconTooltip: string,
        autoHide: string,
        fullscreenOnly: string,
        fullscreenOnlyTooltip: string,
        pressAction: string,
        togglePause: string
      }
    },
    editor: {
      header: string,
      toggleMode: string,
      toggleModeTooltip: string,
      menuLabel: string,
      triggerMode: string,
      triggerModeTooltip: string,
      triggerModeTooltipFf: string,
      triggerModes: {
        "0": string,
        "1": string,
        "2": string
      },
      spacing: string,
      reversible: string,
      reversibleTooltip: string,
      wraparound: string,
      wraparoundTooltip: string,
      addLabel: string,
      liveScrubbing: string,
      liveScrubbingTooltip: string,
      pauseWhileScrubbing: string,
      adjustModes: {
        "1": string,
        "2": string,
        "3": string,
        "4": string,
        "5": string
      },
      openModes: {
        foregroundTab: string,
        backgroundTab: string,
        newWindow: string,
        newPopup: string,
        sameTab: string
      },
      pressAndHold: string,
      pressAndHoldTooltip: string
    },
    rules: {
      header: string,
      setTitleConditions: string,
      clearTitleConditions: string,
      titleConditionsLabel: string,
      titleConditionsTooltip: string,
      conditions: string,
      startsWith: string,
      contains: string,
      regex: string,
      allowlist: string,
      blocklist: string,
      status: string,
      strictness: string,
      strictnessTooltip: string
    },
    help: {
      header: string,
      issuePrompt: string,
      issueDirective: string,
      export: string,
      import: string,
      areYouSure: string,
      copy: string,
      copied: string,
      paste: string,
      exportTooltip: string,
      importTooltip: string
    }
  },
  pageDraw: {
    _labelScale?: number,
    _fontScale?: number,
    draw: string,
    erase: string,
    select: string,
    selectTooltip: string,
    tips: string
  }
}