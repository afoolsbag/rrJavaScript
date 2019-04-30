'use strict'

/**
 * 数值携单位（Number with Unit）
 */
class NumUnit {
  /**
   * 构造函数
   * @param num  数值
   * @param unit 单位
   */
  constructor (num = 0, unit = '') {
    this.num = num
    this.unit = unit
  }

  /**
   * 数值
   * @type {number}
   */
  num

  /**
   * 单位
   * @type {string}
   */
  unit
}

/**
 * 膳食参考摄入量营养素（DRI Nutrient）
 */
class DriNut {
  /**
   * 估计平均需求（Estimated Average Requirements）
   * @type {NumUnit}
   */
  ear

  /**
   * 推荐膳食摄入（Recommended Dietary Allowances）
   * @type {NumUnit}
   */
  rda

  /**
   * 适当摄入（Adequate Intake）
   * @type {NumUnit}
   */
  ai

  /**
   * 耐受最高摄入（Tolerable Upper Intake Levels）
   * @type {NumUnit}
   */
  ul
}

/**
 * 膳食参考摄入量（Dietary Reference Intake）
 */
class Dri {
  /**
   * 适用于（Applicable）
   * @type {string}
   */
  appl

  /**
   * 能量需要量
   * @type {DriNut}
   */
  eer

  /**
   * 水（Water）
   * @type {DriNut}
   */
  wat

  /**
   * 纤维（Fiber）
   * @type {DriNut}
   */
  fib

  /**
   * 碳水化合物（Carbohydrate）
   * @type {DriNut}
   */
  ch

  /**
   * 碳水化合物（Carbohydrate）
   * 宏量营养素可接受范围（Acceptable Macronutrient Distribution Ranges）
   * @type {number}
   */
  chAmdr

  /**
   * 添加糖（Added Sugar）
   * @type {DriNut}
   */
  as

  /**
   * 添加糖（Added Sugar）
   * 宏量营养素可接受范围（Acceptable Macronutrient Distribution Ranges）
   * @type {number}
   */
  asAmdr

  /**
   * 蛋白质（Protein）
   * @type {DriNut}
   */
  prt

  /**
   * 脂肪（Fat）
   * @type {DriNut}
   */
  fat

  /**
   * 脂肪（Fat）
   * 宏量营养素可接受范围（Acceptable Macronutrient Distribution Ranges）
   * @type {number}
   */
  fatAmdr

  /**
   * 亚油酸（Linoleic Acid）
   * @type {DriNut}
   */
  la

  /**
   * α-亚麻酸（Alpha Linolenic Acid）
   * @type {DriNut}
   */
  ala

  /**
   * 胆固醇（Cholesterol）
   * @type {DriNut}
   */
  cho

  /**
   * 反式脂肪酸（Trans Fatty Acids）
   * @type {DriNut}
   */
  tfa

  /**
   * 饱和脂肪酸（Saturated Fatty Acids）
   * @type {DriNut}
   */
  sfa

  /**
   * 饱和脂肪酸（Saturated Fatty Acids）
   * 宏量营养素可接受范围（Acceptable Macronutrient Distribution Ranges）
   * @type {number}
   */
  sfaAmdr

  /**
   * 元素氟（Element F），原子序数9
   * @type {DriNut}
   */
  eF

  /**
   * 元素钠（Element Na），原子序数11
   * @type {DriNut}
   */
  eNa

  /**
   * 元素镁（Element Mg），原子序数12
   * @type {DriNut}
   */
  eMg

  /**
   * 元素磷（Element P），原子序数15
   * @type {DriNut}
   */
  eP

  /**
   * 元素氯（Element Cl），原子序数17
   * @type {DriNut}
   */
  eCl

  /**
   * 元素钾（Element K），原子序数19
   * @type {DriNut}
   */
  eK

  /**
   * 元素钙（Element Ca），原子序数20
   * @type {DriNut}
   */
  eCa

  /**
   * 元素铬（Element Cr），原子序数24
   * @type {DriNut}
   */
  eCr

  /**
   * 元素锰（Element Mn），原子序数25
   * @type {DriNut}
   */
  eMn

  /**
   * 元素铁（Element Fe），原子序数26
   * @type {DriNut}
   */
  eFe

  /**
   * 元素铜（Element Cu），原子序数29
   * @type {DriNut}
   */
  eCu

  /**
   * 元素锌（Element Zn），原子序数30
   * @type {DriNut}
   */
  eZn

  /**
   * 元素硒（Element Se），原子序数34
   * @type {DriNut}
   */
  eSe

  /**
   * 元素钼（Element Mo），原子序数42
   * @type {DriNut}
   */
  eMo

  /**
   * 元素碘（Element I），原子序数53
   * @type {DriNut}
   */
  eI

  /**
   * 维生素A（Vitamin A）
   * @type {DriNut}
   */
  vA

  /**
   * 维生素B1（Vitamin B1），硫胺素
   * @type {DriNut}
   */
  vB1

  /**
   * 维生素B2（Vitamin B2），核黄素
   * @type {DriNut}
   */
  vB2

  /**
   * 维生素B3（Vitamin B3），烟酸
   * @type {DriNut}
   */
  vB3

  /**
   * 维生素B5（Vitamin B5），泛酸
   * @type {DriNut}
   */
  vB5

  /**
   * 维生素B6（Vitamin B6）
   * @type {DriNut}
   */
  vB6

  /**
   * 维生素B7（Vitamin B7），生物素
   * @type {DriNut}
   */
  vB7

  /**
   * 维生素B9（Vitamin B9），叶酸
   * @type {DriNut}
   */
  vB9

  /**
   * 维生素B12（Vitamin B12），氰钴胺
   * @type {DriNut}
   */
  vB12

  /**
   * 维生素C（Vitamin C）
   * @type {DriNut}
   */
  vC

  /**
   * 维生素D（Vitamin D）
   * @type {DriNut}
   */
  vD

  /**
   * 维生素E（Vitamin E），生育酚
   * @type {DriNut}
   */
  vE

  /**
   * 维生素K（Vitamin K）
   * @type {DriNut}
   */
  vK

  /**
   * 胆碱（Choline）
   * @type {DriNut}
   */
  chol
}

// 中国居民膳食营养素参考摄入量2013版，适用于男性（Male）18~49岁
// DRI13M1849 = Dri()
