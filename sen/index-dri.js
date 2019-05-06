'use strict'


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
