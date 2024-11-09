import { useState } from 'react';

interface ScoreItem {
  name: string;
  criteria: {
    score: number;
    description: string;
  }[];
}

const scoreItems: ScoreItem[] = [
  {
    name: '心率',
    criteria: [
      { score: 0, description: '无' },
      { score: 1, description: '< 100次/分' },
      { score: 2, description: '≥ 100次/分' },
    ],
  },
  {
    name: '呼吸',
    criteria: [
      { score: 0, description: '无' },
      { score: 1, description: '慢而不规则' },
      { score: 2, description: '规则有力' },
    ],
  },
  {
    name: '肌张力',
    criteria: [
      { score: 0, description: '松弛' },
      { score: 1, description: '四肢稍屈曲' },
      { score: 2, description: '活动良好' },
    ],
  },
  {
    name: '反应力',
    criteria: [
      { score: 0, description: '无反应' },
      { score: 1, description: '有轻微反应' },
      { score: 2, description: '哭声响亮' },
    ],
  },
  {
    name: '肤色',
    criteria: [
      { score: 0, description: '青紫' },
      { score: 1, description: '身体粉红四肢青紫' },
      { score: 2, description: '全身粉红' },
    ],
  },
];

export default function ApgarScore() {
  const [scores, setScores] = useState<number[]>(new Array(5).fill(0));

  const handleScoreChange = (itemIndex: number, score: number) => {
    const newScores = [...scores];
    newScores[itemIndex] = score;
    setScores(newScores);
  };

  const totalScore = scores.reduce((sum, score) => sum + score, 0);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">新生儿Apgar评分</h1>

      <div className="space-y-6">
        {scoreItems.map((item, itemIndex) => (
          <div key={item.name} className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3">{item.name}</h2>
            <div className="grid grid-cols-3 gap-2">
              {item.criteria.map((criterion) => (
                <button
                  key={criterion.score}
                  onClick={() => handleScoreChange(itemIndex, criterion.score)}
                  className={`p-2 border rounded ${
                    scores[itemIndex] === criterion.score
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="font-bold">{criterion.score}分</div>
                  <div className="text-sm">{criterion.description}</div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="text-xl font-bold">总分: {totalScore}</div>
        <div className="mt-2 text-gray-600">
          {totalScore >= 8
            ? '新生儿状态良好'
            : totalScore >= 4
              ? '需要密切观察'
              : '需要立即干预'}
        </div>
      </div>
    </div>
  );
}
