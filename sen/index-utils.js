'use strict'

/**
 * 纳级（Nano）数值换算为工程计数法（Engineering）字符串
 * @param {number} nanoNumber
 * @param {number} precision 精度
 * @type {string}
 */
function nanoNumberToEngString (nanoNumber, precision = 3) {
  if (1000000000000000 < Math.abs(nanoNumber))
    return (nanoNumber / 1000000000000000).toPrecision(precision) + 'M'
  if (1000000000000 < Math.abs(nanoNumber))
    return (nanoNumber / 1000000000000).toPrecision(precision) + 'k'
  if (1000000000 < Math.abs(nanoNumber))
    return (nanoNumber / 1000000000).toPrecision(precision)
  if (1000000 < Math.abs(nanoNumber))
    return (nanoNumber / 1000000).toPrecision(precision) + 'm'
  if (1000 < Math.abs(nanoNumber))
    return (nanoNumber / 1000).toPrecision(precision) + 'μ'
  if (0 < Math.abs(nanoNumber))
    return nanoNumber + 'n'
  return '0'
}

/**
 * 基点（Basic Point）数值换算为百分比（Percent）字符串
 * @param {number} bpNumber
 * @param {number} precision 精度
 * @type {string}
 */
function bpNumberToPctString (bpNumber, precision = 2) {
  if (0 < Math.abs(bpNumber))
    return (bpNumber / 100).toPrecision(2) + '%'
  return '0'
}

const calPerCh = 4200
const calPerFat = 9400
const calPerPrt = 5650
