import React from 'react';
import Label from '../Atoms/Label';
import SelectBox, { Option } from '../Atoms/SelectBox';

const Questions: React.FC = () => {
  return (
    <div>
      {questions.map((question, index) => {
        return (
          <div key={`question${index}`}>
            <Label name={question.name} />
            <SelectBox options={question.options} />
          </div>
        )
      })}
    </div>
  )
}

export default Questions;

type SelectQuestion = {
  name: string
  options: Option[]
}

const question1: SelectQuestion = {
  name: '「この時間に寝るぞ」と決めた時間の60分前、自分はどんな気分だったか',
  options: [
    { value: '0', label: 'ハッキリ目が覚めていて元気だった' },
    { value: '1', label: '疲れてはいたがヘトヘトではない' },
    { value: '2', label: 'ハッキリ目が覚めていたがヘトヘトだった' },
    { value: '3', label: 'ハッキリ目が覚めていて元気だった' },
    { value: '4', label: 'ちょっとだけ眠気を感じていた' },
    { value: '5', label: '起きているのが難しいぐらい眠かった' },
  ]
}

const question2: SelectQuestion = {
  name: '昨夜はトータルで何時間眠れたか',
  options: [
    { value: '0', label: '〜2' },
    { value: '1', label: '2.5' },
    { value: '2', label: '3' },
    { value: '3', label: '3.5' },
    { value: '4', label: '4' },
    { value: '5', label: '4.5' },
    { value: '6', label: '5' },
    { value: '7', label: '5.5' },
    { value: '8', label: '6' },
    { value: '9', label: '6.5' },
    { value: '10', label: '7' },
    { value: '11', label: '7.5' },
    { value: '12', label: '8' },
    { value: '13', label: '8.5' },
    { value: '14', label: '9' },
    { value: '15', label: '9.5' },
    { value: '16', label: '10〜' },
  ]
}

const question3: SelectQuestion = {
  name: '昨夜はどれぐらい簡単に入眠できたか',
  options: [
    { value: '0', label: 'とても簡単だった' },
    { value: '1', label: '簡単だった' },
    { value: '2', label: '普通だった' },
    { value: '3', label: '難しかった' },
    { value: '4', label: 'とても難しかった' },
  ]
}

const question4: SelectQuestion = {
  name: '寝床に入った時の気分はどうだったか',
  options: [
    { value: '0', label: '普通' },
    { value: '1', label: '興奮状態' },
    { value: '2', label: '不安' },
    { value: '3', label: 'イライラ' },
    { value: '4', label: '平静' },
    { value: '5', label: '傷ついた状態' },
    { value: '6', label: '無感情' },
    { value: '7', label: '幸福' },
    { value: '8', label: '怒り' },
    { value: '9', label: '悲しみ' }
  ]
}

const question5: SelectQuestion = {
  name: '夜中に何回目が覚めたか',
  options: [
    { value: '0', label: '0' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5~' }
  ]
}

const question6: SelectQuestion = {
  name: 'どんな夢を見たか',
  options: [
    { value: '0', label: '見てない/覚えていない' },
    { value: '1', label: '幸福' },
    { value: '2', label: '退屈' },
    { value: '3', label: '恐怖' },
    { value: '4', label: '異常' },
    { value: '5', label: '奇妙' },
    { value: '6', label: '明晰夢' },
    { value: '7', label: 'いつもの夢' },
    { value: '8', label: '性的' },
    { value: '9', label: '現実的' }
  ]
}

const question7: SelectQuestion = {
  name: '目が覚めた時の気分はどうだったか',
  options: [
    { value: '0', label: 'すっきりとリフレッシュしていた' },
    { value: '1', label: '目は覚めたがなんとなくダルい' },
    { value: '2', label: '疲れが残っていたがすぐ目が覚めた' },
    { value: '3', label: '疲れていてダルい' },
  ]
}

const question8: SelectQuestion = {
  name: '起きた後の気分はどうだったか',
  options: [
    { value: '0', label: '普通' },
    { value: '1', label: '興奮状態' },
    { value: '2', label: '不安' },
    { value: '3', label: 'イライラ' },
    { value: '4', label: '平静' },
    { value: '5', label: '傷ついた状態' },
    { value: '6', label: '無感情' },
    { value: '7', label: '幸福' },
    { value: '8', label: '怒り' },
    { value: '9', label: '悲しみ' }
  ]
}

const questions = [question1, question2, question3, question4, question5, question6, question7, question8]

