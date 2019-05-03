'use strict'

/**
 * 膳食参考摄入量（Dietary Reference Intake）
 * 项（Item）
 */
class DriItem {
  /**
   * 构造函数
   * @param {Object} json
   * @param {string} unit
   */
  constructor (json = {}, unit = '?') {
    Object.assign(this, json)
    this.unit = unit
  }

  /**
   * 平均需要量（Estimated Average Requirements）
   * 纳级数值（分度 1n?）
   * @type {Number}
   */
  ear

  /**
   * 推荐摄入量（Recommended Nutrient Intake）
   * 纳级数值（分度 1n?）
   * @type {Number}
   */
  rni

  /**
   * 适宜摄入量（Adequate Intake）
   * 纳级数值（分度 1n?）
   * @type {Number}
   */
  ai

  /**
   * 可耐受最高摄入量（Tolerable Upper Intake Levels）
   * 纳级数值（分度 1n?）
   * @type {Number}
   */
  ul

  /**
   * 单位
   * @type {string}
   */
  unit

  /**
   * 平均需求量的工程计数法形式字符串
   * @returns {string}
   */
  earString () {
    if (isNaN(this.ear))
      return 'un'
    else
      return nanoNumberToEngString(this.ear) + this.unit
  }

  /**
   * 推荐摄入量的工程计数法形式字符串
   * @returns {string}
   */
  rniString () {
    if (isNaN(this.rni))
      return 'un'
    else
      return nanoNumberToEngString(this.rni) + this.unit
  }

  /**
   * 适宜摄入量的工程计数法形式字符串
   * @returns {string}
   */
  aiString () {
    if (isNaN(this.ai))
      return 'un'
    else
      return nanoNumberToEngString(this.ai) + this.unit
  }

  /**
   * 可耐受最高摄入量的工程计数法形式字符串
   * @returns {string}
   */
  ulString () {
    if (isNaN(this.ul))
      return 'un'
    else
      return nanoNumberToEngString(this.ul) + this.unit
  }

  /**
   * 转换为字符串形式
   */
  toString () {
    if (!isNaN(this.rni))
      return this.rniString() + '(RNI)'
    if (!isNaN(this.ai))
      return this.aiString() + '(AI)'
    return 'un'
  }
}

/**
 * 膳食参考摄入量（Dietary Reference Intake）
 * 宏量营养素可接受范围（Acceptable Macronutrient Distribution Ranges）
 */
class DriAmdr {
  /**
   * 构造函数
   * @param json {Object}
   */
  constructor (json = {}) {
    Object.assign(this, json)
  }

  /**
   * 下限
   * 基点数值（分度 1‱）
   * @type {number}
   */
  lower

  /**
   * 上限
   * 基点数值（分度 1‱）
   * @type {number}
   */
  upper

  /**
   * 下限的百分形式字符串
   * @type {string}
   */
  lowerString () {
    if (isNaN(this.lower))
      return 'Unknown'
    else
      return bpNumberToPctString(this.lower)
  }

  /**
   * 上限的百分形式字符串
   * @type {string}
   */
  upperString () {
    if (isNaN(this.upper))
      return 'Unknown'
    else
      return bpNumberToPctString(this.upper)
  }

  /**
   * 转换为字符串形式
   */
  toString () {
    return this.lowerString() + '~' + this.upperString()
  }
}

/**
 * 膳食参考摄入量（Dietary Reference Intake）
 */
class Dri {
  /**
   * 构造函数
   * @param json {Object}
   */
  constructor (json = {}) {
    this.id = json.id
    this.desc = json.desc
    this.eer = new DriItem(json.eer, 'cal/d')
    this.chAmdr = new DriAmdr(json.chAmdr)
    this.sugAmdr = new DriAmdr(json.sugAmdr)
    this.fatAmdr = new DriAmdr(json.fatAmdr)
    this.sfaAmdr = new DriAmdr(json.sfaAmdr)
    this.wat = new DriItem(json.wat, 'g/d')
    this.fib = new DriItem(json.fib, 'g/d')
    this.ch = new DriItem(json.ch, 'g/d')
    this.sug = new DriItem(json.sug, 'g/d')
    this.prt = new DriItem(json.prt, 'g/d')
    this.fat = new DriItem(json.fat, 'g/d')
    this.la = new DriItem(json.la, 'g/d')
    this.ala = new DriItem(json.ala, 'g/d')
    this.cho = new DriItem(json.cho, 'g/d')
    this.tfa = new DriItem(json.tfa, 'g/d')
    this.sfa = new DriItem(json.sfa, 'g/d')
    this.eF = new DriItem(json.eF, 'g/d')
    this.eNa = new DriItem(json.eNa, 'g/d')
    this.eMg = new DriItem(json.eMg, 'g/d')
    this.eP = new DriItem(json.eP, 'g/d')
    this.eCl = new DriItem(json.eCl, 'g/d')
    this.eK = new DriItem(json.eK, 'g/d')
    this.eCa = new DriItem(json.eCa, 'g/d')
    this.eCr = new DriItem(json.eCr, 'g/d')
    this.eMn = new DriItem(json.eMn, 'g/d')
    this.eFe = new DriItem(json.eFe, 'g/d')
    this.eCu = new DriItem(json.eCu, 'g/d')
    this.eZn = new DriItem(json.eZn, 'g/d')
    this.eSe = new DriItem(json.eSe, 'g/d')
    this.eMo = new DriItem(json.eMo, 'g/d')
    this.eI = new DriItem(json.eI, 'g/d')
    this.vA = new DriItem(json.vA, 'g/d')
    this.vB1 = new DriItem(json.vB1, 'g/d')
    this.vB2 = new DriItem(json.vB2, 'g/d')
    this.vB3 = new DriItem(json.vB3, 'g/d')
    this.vB4 = new DriItem(json.vB4, 'g/d')
    this.vB5 = new DriItem(json.vB5, 'g/d')
    this.vB6 = new DriItem(json.vB6, 'g/d')
    this.vB7 = new DriItem(json.vB7, 'g/d')
    this.vB9 = new DriItem(json.vB9, 'g/d')
    this.vB12 = new DriItem(json.vB12, 'g/d')
    this.vC = new DriItem(json.vC, 'g/d')
    this.vD = new DriItem(json.vD, 'g/d')
    this.vE = new DriItem(json.vE, 'g/d')
    this.vK = new DriItem(json.vK, 'g/d')
  }

  /**
   * 标识（Identifier）
   * @type {String}
   */
  id

  /**
   * 描述（Description）
   * @type {string}
   */
  desc

  /**
   * 能量需要量
   * @type {DriItem}
   */
  eer = new DriItem()

  /**
   * 碳水化合物（Carbohydrate）
   * 宏量营养素可接受范围（Acceptable Macronutrient Distribution Ranges）
   * @type {DriAmdr}
   */
  chAmdr

  /**
   * 添加糖（Added Sugar）
   * 宏量营养素可接受范围（Acceptable Macronutrient Distribution Ranges）
   * @type {DriAmdr}
   */
  sugAmdr

  /**
   * 脂肪（Fat）
   * 宏量营养素可接受范围（Acceptable Macronutrient Distribution Ranges）
   * @type {DriAmdr}
   */
  fatAmdr

  /**
   * 饱和脂肪酸（Saturated Fatty Acids）
   * 宏量营养素可接受范围（Acceptable Macronutrient Distribution Ranges）
   * @type {DriAmdr}
   */
  sfaAmdr

  /**
   * 水（Water）
   * @type {DriItem}
   */
  wat

  /**
   * 纤维（Fiber）
   * @type {DriItem}
   */
  fib

  /**
   * 碳水化合物（Carbohydrate）
   * @type {DriItem}
   */
  ch

  /**
   * 添加糖（Added Sugar）
   * @type {DriItem}
   */
  sug

  /**
   * 蛋白质（Protein）
   * @type {DriItem}
   */
  prt

  /**
   * 脂肪（Fat）
   * @type {DriItem}
   */
  fat

  /**
   * 亚油酸（Linoleic Acid）
   * @type {DriItem}
   */
  la

  /**
   * α-亚麻酸（Alpha Linolenic Acid）
   * @type {DriItem}
   */
  ala

  /**
   * 胆固醇（Cholesterol）
   * @type {DriItem}
   */
  cho

  /**
   * 反式脂肪酸（Trans Fatty Acids）
   * @type {DriItem}
   */
  tfa

  /**
   * 饱和脂肪酸（Saturated Fatty Acids）
   * @type {DriItem}
   */
  sfa

  /**
   * 元素氟（Element F），原子序数9
   * @type {DriItem}
   */
  eF

  /**
   * 元素钠（Element Na），原子序数11
   * @type {DriItem}
   */
  eNa

  /**
   * 元素镁（Element Mg），原子序数12
   * @type {DriItem}
   */
  eMg

  /**
   * 元素磷（Element P），原子序数15
   * @type {DriItem}
   */
  eP

  /**
   * 元素氯（Element Cl），原子序数17
   * @type {DriItem}
   */
  eCl

  /**
   * 元素钾（Element K），原子序数19
   * @type {DriItem}
   */
  eK

  /**
   * 元素钙（Element Ca），原子序数20
   * @type {DriItem}
   */
  eCa

  /**
   * 元素铬（Element Cr），原子序数24
   * @type {DriItem}
   */
  eCr

  /**
   * 元素锰（Element Mn），原子序数25
   * @type {DriItem}
   */
  eMn

  /**
   * 元素铁（Element Fe），原子序数26
   * @type {DriItem}
   */
  eFe

  /**
   * 元素铜（Element Cu），原子序数29
   * @type {DriItem}
   */
  eCu

  /**
   * 元素锌（Element Zn），原子序数30
   * @type {DriItem}
   */
  eZn

  /**
   * 元素硒（Element Se），原子序数34
   * @type {DriItem}
   */
  eSe

  /**
   * 元素钼（Element Mo），原子序数42
   * @type {DriItem}
   */
  eMo

  /**
   * 元素碘（Element I），原子序数53
   * @type {DriItem}
   */
  eI

  /**
   * 维生素A（Vitamin A），视黄醇
   * @type {DriItem}
   */
  vA

  /**
   * 维生素B1（Vitamin B1），硫胺素
   * @type {DriItem}
   */
  vB1

  /**
   * 维生素B2（Vitamin B2），核黄素
   * @type {DriItem}
   */
  vB2

  /**
   * 维生素B3（Vitamin B3），烟酸
   * @type {DriItem}
   */
  vB3

  /**
   * 维生素B4（Vitamin B4），胆碱（Choline）
   * @type {DriItem}
   */
  vB4

  /**
   * 维生素B5（Vitamin B5），泛酸
   * @type {DriItem}
   */
  vB5

  /**
   * 维生素B6（Vitamin B6），吡哆醇
   * @type {DriItem}
   */
  vB6

  /**
   * 维生素B7（Vitamin B7），生物素
   * @type {DriItem}
   */
  vB7

  /**
   * 维生素B9（Vitamin B9），叶酸
   * @type {DriItem}
   */
  vB9

  /**
   * 维生素B12（Vitamin B12），氰钴胺
   * @type {DriItem}
   */
  vB12

  /**
   * 维生素C（Vitamin C），抗坏血酸
   * @type {DriItem}
   */
  vC

  /**
   * 维生素D（Vitamin D）
   * @type {DriItem}
   */
  vD

  /**
   * 维生素E（Vitamin E），生育酚
   * @type {DriItem}
   */
  vE

  /**
   * 维生素K（Vitamin K），叶绿醌
   * @type {DriItem}
   */
  vK
}
