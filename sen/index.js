'use strict'

class UnitNum {
  num
  unit
}

/**
 * DRI 营养素（DRI Nutrient）
 */
class DriNut {
  /**
   * 估计平均需求（Estimated Average Requirements）
   * @type {UnitNum}
   */
  ear = new UnitNum()

  /**
   * 推荐膳食摄入（Recommended Dietary Allowances）
   * @type {UnitNum}
   */
  rda = new UnitNum()

  /**
   * 适当摄入（Adequate Intake）
   * @type {UnitNum}
   */
  ai = new UnitNum()

  /**
   * 耐受最高摄入（Tolerable Upper Intake Levels）
   * @type {UnitNum}
   */
  ul = new UnitNum()
}

/**
 * 膳食参考摄入量（Dietary Reference Intake）
 */
class Dri {
  /**
   * 适用于
   * @type {string}
   */
  applicable = ''

  // 宏量营养素

  /**
   * 水
   * @type {DriNut}
   */
  water = new DriNut()

  /**
   * 碳水化合物
   * @type {DriNut}
   */
  carbohydrate = new DriNut()  # 碳水化合物
  added_sugar = DriNut()  # 添加糖
  protein = DriNut()  # 蛋白质
  fiber = DriNut()  # 纤维
  fat = DriNut()  # 脂肪
  linoleic_acid = DriNut()  # 亚油酸
  alpha_linolenic_acid = DriNut()  # α-亚麻酸
  cholesterol = DriNut()  # 胆固醇
  trans_fatty_acids = DriNut()  # 反式脂肪酸
  saturated_fatty_acids = DriNut()  # 饱和脂肪酸

  // 矿物质

  f = DriNut()  # 氟元素，原子序数9
  na = DriNut()  # 钠元素，原子序数11
  mg = DriNut()  # 镁元素，原子序数12
  p = DriNut()  # 磷元素，原子序数15
  cl = DriNut()  # 氯元素，原子序数17
  k = DriNut()  # 钾元素，原子序数19
  ca = DriNut()  # 钙元素，原子序数20
  cr = DriNut()  # 铬元素，原子序数24
  mn = DriNut()  # 锰元素，原子序数25
  fe = DriNut()  # 铁元素，原子序数26
  cu = DriNut()  # 铜元素，原子序数29
  zn = DriNut()  # 锌元素，原子序数30
  se = DriNut()  # 硒元素，原子序数34
  mo = DriNut()  # 钼元素，原子序数42
  i = DriNut()  # 碘元素，原子序数53

  // 维生素

  va = DriNut()  # 维生素A
  vb1 = DriNut()  # 维生素B1，硫胺素
  vb2 = DriNut()  # 维生素B2，核黄素
  vb3 = DriNut()  # 维生素B3，烟酸
  vb5 = DriNut()  # 维生素B5，泛酸
  vb6 = DriNut()  # 维生素B6
  vb7 = DriNut()  # 维生素B7，生物素
  vb9 = DriNut()  # 维生素B9，叶酸
  vb12 = DriNut()  # 维生素B12，氰钴胺
  vc = DriNut()  # 维生素C
  vd = DriNut()  # 维生素D
  ve = DriNut()  # 维生素E，生育酚
  vk = DriNut()  # 维生素K
  choline = DriNut()  # 胆碱
}

/*
# coding: utf-8

# 中国居民膳食营养素参考摄入量2013版，适用于男性（Male）18~49岁
DRI13M1849 = Dri()
DRI13M1849.ca.ear = 800 * mg / day

if __name__ == '__main__':
    print(DRI13M1849.ca.ear / (1 * mg / day))
*/
