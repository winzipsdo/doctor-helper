import { useState } from 'react';

interface HeartRateRange {
  ageGroup: string;
  meanRate: number;
  range: string;
  detail?: string;
  source?: string;
  percentiles?: {
    p5?: number;
    p50?: number;
    p95?: number;
  };
}

const heartRateData: HeartRateRange[] = [
  {
    ageGroup: '早产儿',
    meanRate: 140,
    range: '120-170',
    detail: '具体范围随胎龄增加而下降',
    source: 'European Resuscitation Council Guidelines 2021',
    percentiles: {
      p5: 120,
      p50: 140,
      p95: 170,
    },
  },
  {
    ageGroup: '足月新生儿(0-28天)',
    meanRate: 125,
    range: '100-165',
    detail: '睡眠时85-135，哭闹时可达165-185',
    source: 'AAP Textbook of Pediatric Care',
    percentiles: {
      p5: 100,
      p50: 125,
      p95: 165,
    },
  },
  {
    ageGroup: '1-2月',
    meanRate: 120,
    range: '100-160',
    detail: '睡眠时80-130，哭闹时可达160-180',
    source: 'AAP Textbook of Pediatric Care',
    percentiles: {
      p5: 100,
      p50: 120,
      p95: 160,
    },
  },
  {
    ageGroup: '3-5月',
    meanRate: 115,
    range: '90-150',
    source: 'AAP Textbook of Pediatric Care',
    percentiles: {
      p5: 90,
      p50: 115,
      p95: 150,
    },
  },
  {
    ageGroup: '6-11月',
    meanRate: 110,
    range: '90-145',
    source: 'AAP Textbook of Pediatric Care',
    percentiles: {
      p5: 90,
      p50: 110,
      p95: 145,
    },
  },
  {
    ageGroup: '1-2岁',
    meanRate: 105,
    range: '85-140',
    source: 'AAP Textbook of Pediatric Care',
    percentiles: {
      p5: 85,
      p50: 105,
      p95: 140,
    },
  },
  {
    ageGroup: '3-4岁',
    meanRate: 100,
    range: '80-135',
    source: 'AAP Textbook of Pediatric Care',
    percentiles: {
      p5: 80,
      p50: 100,
      p95: 135,
    },
  },
  {
    ageGroup: '5-7岁',
    meanRate: 95,
    range: '75-130',
    source: 'AAP Textbook of Pediatric Care',
    percentiles: {
      p5: 75,
      p50: 95,
      p95: 130,
    },
  },
  {
    ageGroup: '8-11岁',
    meanRate: 85,
    range: '70-120',
    source: 'AAP Textbook of Pediatric Care',
    percentiles: {
      p5: 70,
      p50: 85,
      p95: 120,
    },
  },
  {
    ageGroup: '12-15岁',
    meanRate: 80,
    range: '65-115',
    source: 'AAP Textbook of Pediatric Care',
    percentiles: {
      p5: 65,
      p50: 80,
      p95: 115,
    },
  },
];

export default function HeartRateReferencePage() {
  const [selectedAge, setSelectedAge] = useState<string>('');

  return (
    <div className="max-w-2xl mx-auto p-2">
      <h1 className="text-xl font-bold mb-2">小儿心率参考值</h1>

      {/* 年龄选择器 */}
      <div className="mb-4">
        <select
          value={selectedAge}
          onChange={(e) => setSelectedAge(e.target.value)}
          className="w-full p-2 border rounded-lg"
        >
          <option value="">显示所有年龄段</option>
          {heartRateData.map((item) => (
            <option key={item.ageGroup} value={item.ageGroup}>
              {item.ageGroup}
            </option>
          ))}
        </select>
      </div>

      {/* 心率数据展示 */}
      <div className="space-y-2">
        {heartRateData
          .filter((item) => !selectedAge || item.ageGroup === selectedAge)
          .map((item) => (
            <div key={item.ageGroup} className="border rounded-lg p-3 bg-white">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-base">{item.ageGroup}</span>
                <span className="text-sm text-gray-500">
                  平均值: {item.meanRate} 次/分
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{
                      width: `${
                        ((item.meanRate - parseInt(item.range.split('-')[0])) /
                          (parseInt(item.range.split('-')[1]) -
                            parseInt(item.range.split('-')[0]))) *
                        100
                      }%`,
                    }}
                  />
                </div>
                <span className="text-sm font-medium">{item.range} 次/分</span>
              </div>

              {item.detail && (
                <div className="mt-1 text-xs text-gray-500">{item.detail}</div>
              )}
            </div>
          ))}
      </div>

      {/* 注意事项更新 */}
      <div className="mt-4 text-sm text-gray-600">
        <p className="font-semibold mb-2">临床注意事项：</p>
        <ul className="list-disc list-inside space-y-1">
          <li>数据来源：美国儿科学会(AAP)和欧洲复苏委员会(ERC)官方指南</li>
          <li>
            以下情况可导致心率明显升高：
            <ul className="ml-4 mt-1">
              <li>发热（体温每升高1℃，心率可增加10次/分）</li>
              <li>剧烈哭闹、运动</li>
              <li>疼痛、焦虑</li>
              <li>贫血、脱水</li>
            </ul>
          </li>
          <li>
            以下情况可导致心率降低：
            <ul className="ml-4 mt-1">
              <li>睡眠（较清醒时可降低10-15%）</li>
              <li>运动员</li>
              <li>迷走神经兴奋</li>
            </ul>
          </li>
          <li>需结合呼吸、血压等生命体征综合评估</li>
          <li>异常心率应考虑心律失常可能</li>
        </ul>
      </div>

      {/* 数据来源说明 */}
      <div className="mt-4 text-xs text-gray-500">
        <p>参考文献：</p>
        <ul className="list-disc list-inside">
          <li>
            American Academy of Pediatrics. Textbook of Pediatric Care (2nd ed.)
          </li>
          <li>European Resuscitation Council Guidelines 2021</li>
          <li>Nelson Textbook of Pediatrics (21st ed.)</li>
        </ul>
      </div>
    </div>
  );
}
