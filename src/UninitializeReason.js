import Enum from 'enum.js';

export const UninitializeReason = new Enum([
  'REASON_NORMAL',
  'REASON_REMOVE',
  'REASON_RECOMPILE',
  'REASON_CHARTCHANGE',
  'REASON_CHARTCLOSE'
]);