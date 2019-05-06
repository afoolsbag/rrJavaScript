'use strict'

//------------------------------------------------------------------------------
// 食物成分（Food Composition）

/**
 * 食物成分（Food Composition）
 */
class FoodComposition {
  /**
   * 构造函数
   * @param {object} json
   */
  constructor (json = {}) {
    Object.assign(this, json)
  }

  /**
   * 标识（名称）
   * 参考：
   * 联合国粮食及农业组织（FAO，Food and Agriculture Organization of the United Nations）
   * 国际食品数据系统网络（INFOODS，International Network of Food Data Systems）
   * @type {string}
   */
  tag

  /**
   * 英文（名称）
   * @type {string}
   */
  en

  /**
   * 中文（名称）
   * @type {string}
   */
  zh

  /**
   * 数值
   * @type {number}
   */
  value

  /**
   * 单位
   * @type {string}
   */
  unit

  /**
   * toString
   */
  toString () {
    if (typeof this.value === 'number')
      return this.value + this.unit
    return 'un'
  }
}

/**
 * 食物成分：水（Water）
 */
class FcWater extends FoodComposition {
  /**
   * 构造函数
   * @param {object} json
   */
  constructor (json = {}) {
    super(json)
    this.tag = 'WATER'
    this.en = 'Water'
    this.zh = '水分'
    this.unit = 'g/100g'
  }
}

//------------------------------------------------------------------------------
// 膳食参考摄入量（Dietary Reference Intake）

/**
 * 膳食参考摄入量（Dietary Reference Intake）
 */
class DietaryReferenceIntake {
  /**
   * 构造函数
   * @param {object} json
   */
  constructor (json = {}) {
    Object.assign(this, json)
  }

  /**
   * 标识（名称）
   * 参考：
   * 联合国粮食及农业组织（FAO，Food and Agriculture Organization of the United Nations）
   * 国际食品数据系统网络（INFOODS，International Network of Food Data Systems）
   * @type {string}
   */
  tag

  /**
   * 英文（名称）
   * @type {string}
   */
  en

  /**
   * 中文（名称）
   * @type {string}
   */
  zh
  /**
   * 平均需要量（Estimated Average Requirements）
   * 对于半数个体，摄入量达 EAR 水平可满足需要。
   * @type {number}
   */
  ear

  /**
   * 推荐摄入量（Recommended Nutrient Intake）
   * 对于绝大多数（97%~98%）个体，摄入量达 RNI 水平可满足需要。
   * @type {number}
   */
  rni

  /**
   * 适宜摄入量（Adequate Intake）
   * 对于几乎所有个体，摄入量达 AI 可满足需要；AI 准确性远不如 RNI，可能显著高于 RNI。
   * 摄入量长期超过 AI 水平，产生毒副作用的可能性会增加。
   * @type {number}
   */
  ai

  /**
   * 特定建议值（Specific Proposed Levels）
   * @type {number}
   */
  spl

  /**
   * 可耐受最高摄入量（Tolerable Upper Intake Levels）
   * 对于几乎所有个体，摄入量达 UL 不至于损害健康。
   * 摄入量超过 UL 水平，产生毒副作用的可能性会增加。
   * @type {number}
   */
  ul

  /**
   * 数值
   * @type {number|number[]}
   */
  value

  /**
   * 单位
   * @type {string}
   */
  unit

  /**
   * toString
   */
  toString (which = 'auto') {
    switch (which) {
      case 'ear':
        if (typeof this.ear === 'number')
          return this.ear + this.unit
        return 'un'
      case 'rni':
        if (typeof this.rni === 'number')
          return this.rni + this.unit
        return 'un'
      case 'ai':
        if (typeof this.ai === 'number')
          return this.ai + this.unit
        return 'un'
      case 'spl':
        if (typeof this.spl === 'number')
          return this.spl + this.unit
        return 'un'
      case 'value':
        if (typeof this.value === 'number')
          return this.value + this.unit
        if (typeof this.value === 'object' && this.value instanceof Array)
          return this.value.map(value => value + this.unit).join(', ')
        return 'un'
      case 'ul':
        if (typeof this.ul === 'number')
          return this.ul + this.unit
        return 'un'
      default:
        if (typeof this.rni === 'number')
          return this.rni + this.unit + '(RNI)'
        if (typeof this.ai === 'number')
          return this.ai + this.unit + '(AI)'
        if (typeof this.spl === 'number')
          return this.spl + this.unit + '(SPL)'
        if (typeof this.value === 'number')
          return this.value + this.unit
        if (typeof this.value === 'object' && this.value instanceof Array)
          return this.value.map(value => value + this.unit).join(', ')
        return 'un'
    }
  }
}

/**
 * 膳食参考摄入量：能量需要量（Estimated Energy Requirement）
 */
class DriEer extends DietaryReferenceIntake {
  /**
   * 构造函数
   * @param {object} json
   */
  constructor (json = {}) {
    super(json)
    this.tag = 'EER'
    this.en = 'Estimated Energy Requirement'
    this.zh = '能量需要量'
    this.unit = 'kcal/d'
  }
}

/**
 * 膳食参考摄入量：宏量营养素可接受范围：碳水化合物（Acceptable Macronutrient Distribution Ranges: Carbohydrate）
 */
class DriAmdrCho extends DietaryReferenceIntake {
  /**
   * 构造函数
   * @param {object} json
   */
  constructor (json = {}) {
    super(json)
    this.tag = 'AMDR:CHO'
    this.en = 'Acceptable Macronutrient Distribution Ranges: Carbohydrate'
    this.zh = '宏量营养素可接受范围：碳水化合物'
    this.unit = '%'
  }
}

/**
 * 膳食参考摄入量：宏量营养素可接受范围：添加糖（Acceptable Macronutrient Distribution Ranges: Added Sugar）
 */
class DriAmdrSug extends DietaryReferenceIntake {
  /**
   * 构造函数
   * @param {object} json
   */
  constructor (json = {}) {
    super(json)
    this.tag = 'AMDR:SUG'
    this.en = 'Acceptable Macronutrient Distribution Ranges: Added Sugar'
    this.zh = '宏量营养素可接受范围：添加糖'
    this.unit = '%'
  }
}

/**
 * 膳食参考摄入量：宏量营养素可接受范围：脂肪（Acceptable Macronutrient Distribution Ranges: Fat）
 */
class DriAmdrFat extends DietaryReferenceIntake {
  /**
   * 构造函数
   * @param {object} json
   */
  constructor (json = {}) {
    super(json)
    this.tag = 'AMDR:FAT'
    this.en = 'Acceptable Macronutrient Distribution Ranges: Fat'
    this.zh = '宏量营养素可接受范围：脂肪'
    this.unit = '%'
  }
}

/**
 * 膳食参考摄入量：宏量营养素可接受范围：饱和脂肪酸（Acceptable Macronutrient Distribution Ranges: Fatty Acids, Saturated）
 */
class DriAmdrFasat extends DietaryReferenceIntake {
  /**
   * 构造函数
   * @param {object} json
   */
  constructor (json = {}) {
    super(json)
    this.tag = 'AMDR:FASAT'
    this.en = 'Acceptable Macronutrient Distribution Ranges: Fatty Acids, Saturated'
    this.zh = '宏量营养素可接受范围：饱和脂肪酸'
    this.unit = '%'
  }
}

/**
 * 膳食参考摄入量：宏量营养素可接受范围：n-6 多不饱和脂肪酸（Acceptable Macronutrient Distribution Ranges: Fatty Acids, n-6 Polyunsaturated）
 */
class DriAmdrFapun6 extends DietaryReferenceIntake {
  /**
   * 构造函数
   * @param {object} json
   */
  constructor (json = {}) {
    super(json)
    this.tag = 'AMDR:FAPUN6'
    this.en = 'Acceptable Macronutrient Distribution Ranges: Fatty Acids, n-6 Polyunsaturated'
    this.zh = '宏量营养素可接受范围：n-6 多不饱和脂肪酸'
    this.unit = '%'
  }
}

/**
 * 膳食参考摄入量：宏量营养素可接受范围：n-3 多不饱和脂肪酸（Acceptable Macronutrient Distribution Ranges: Fatty Acids, n-3 Polyunsaturated）
 */
class DriAmdrFapun3 extends DietaryReferenceIntake {
  /**
   * 构造函数
   * @param {object} json
   */
  constructor (json = {}) {
    super(json)
    this.tag = 'AMDR:FAPUN3'
    this.en = 'Acceptable Macronutrient Distribution Ranges: Fatty Acids, n-3 Polyunsaturated'
    this.zh = '宏量营养素可接受范围：n-3 多不饱和脂肪酸'
    this.unit = '%'
  }
}

/**
 * 膳食参考摄入量：水（Water）
 */
class DriWater extends DietaryReferenceIntake {
  /**
   * 构造函数
   * @param {object} json
   */
  constructor (json = {}) {
    super(json)
    this.tag = 'WATER'
    this.en = 'Water'
    this.zh = '水'
    this.unit = 'g/d'
  }
}

//TODO: ...

/**
 * 膳食参考摄入量：蛋白质（Protein）
 */
class DriPro extends DietaryReferenceIntake {
  /**
   * 构造函数
   * @param {object} json
   */
  constructor (json = {}) {
    super(json)
    this.tag = 'PRO'
    this.en = 'Protein'
    this.zh = '蛋白质'
    this.unit = 'g/d'
  }
}

/**
 * 膳食参考摄入量：脂肪（Fat）
 */
class DriFat extends DietaryReferenceIntake {
  /**
   * 构造函数
   * @param {object} json
   */
  constructor (json = {}) {
    super(json)
    this.tag = 'WATER'
    this.en = 'Water'
    this.zh = '水'
    this.unit = 'g/d'
  }
}

/**
 * 膳食参考摄入量：碳水化合物（Water）
 */
class DriAmdrFapun3 extends DietaryReferenceIntake {
  /**
   * 构造函数
   * @param {object} json
   */
  constructor (json = {}) {
    super(json)
    this.tag = 'WATER'
    this.en = 'Water'
    this.zh = '水'
    this.unit = 'g/d'
  }
}

/**
 * 膳食参考摄入量表（Dietary Reference Intake Table）
 */
class DietaryReferenceIntakeTable {
  /**
   * 能量需要量（Estimated Energy Requirement）
   * 单位：kcal/d
   */
  eer
}

//------------------------------------------------------------------------------
// Script

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    dri: {}
  },
  created () {
    fetch('dri/dri13m1849.json')
      .then(response => response.json())
      .then(json => {
        this.dri = new Dri(json)
      })
  }
})
