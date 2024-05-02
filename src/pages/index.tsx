import { FadeIn, SlideInRight, SlideInLeft } from './components/FadeIn';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '@/styles/Home.module.css'
import {
  Radar, RadarChart, PolarGrid, Tooltip,
  PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';
import React from 'react';

const dataRadar1 = [
  { rank: 'HTML/CSS', score: 70, fullMark: 100},
  { rank: 'JavaScript', score: 20, fullMark: 100 },
  { rank: 'TypeScript', score: 60, fullMark: 100 },
  { rank: 'React/Next.js', score: 80, fullMark: 100 },
  { rank: 'Bootstrap', score: 50, fullMark: 100 },
  { rank: 'TailwindCSS', score: 70, fullMark: 100 },
  ];
const dataRadar2 = [
  { rank: 'Node.js', score: 80, fullMark: 100},
  { rank: 'Linux', score: 60, fullMark: 100 },
  { rank: 'Docker', score: 40, fullMark: 100 },
  { rank: 'Python', score: 100, fullMark: 100 },
  { rank: 'Unity', score: 70, fullMark: 100 },
  { rank: 'C#', score: 70, fullMark: 100 },
  ];

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <div className='container'>
        <SlideInLeft>
          <div id="about" className="text-center mt-10 text-[min(10vw,100px)]">
              About Me
          </div>      
        </SlideInLeft>
          <div className='mx-auto text-center text-[min(4vw,40px)] rounded-lg bg-sky-500/100 text-white shadow-lg'>名前</div>
          <div className='mx-auto text-center text-[min(5vw,50px)] mt-3'>村田 知弥 (Murata Tomoya)</div>
          <div className='mx-auto text-center text-[min(4vw,40px)] rounded-lg bg-sky-500/100 text-white shadow-lg mt-5'>所属</div>
          <table className="mx-auto border-collapse border border-slate-400 mt-5">
            <tbody>
              <tr>
                <td className="border border-slate-300 ...">2024.04.01</td>
                <td className="border border-slate-300 ...">大阪公立大学大学院 情報学研究科 入学</td>
              </tr>
              <tr>
                <td className="border border-slate-300 ...">2024.03.31</td>
                <td className="border border-slate-300 ...">大阪府立大学 工学域 卒業</td>
              </tr>
              <tr>
                <td className="border border-slate-300 ...">2020.04.01</td>
                <td className="border border-slate-300 ...">大阪府立大学 工学域 入学</td>
              </tr>
              <tr>
                <td className="border border-slate-300 ...">2020.03.31</td>
                <td className="border border-slate-300 ...">徳島県立城東高等学校 卒業</td>
              </tr>
            </tbody>
          </table>
          <div className='mx-auto text-center text-[min(4vw,40px)] rounded-lg bg-sky-500/100 text-white shadow-lg mt-5 mb-3'>研究</div>
          <div className='mx-auto text-center text-[min(3vw,30px)]'>
            《自然言語情報を導入した星空画像生成》
          </div>
          <div className='mx-auto'>
            要素技術：
            GAN(Generative Adversarial Networks),
            CLIP(Contrastive Language-Image Pre-training)
          </div>
          <div className='mx-auto'>
            AIは大まかな特徴を掴んで類似の画像を生成することには優れている一方で小さな点の集合を正確に生成することは苦手としている。そこで、GANによる画像生成とCLIPによる類似度計算を組み合わせることで、テキスト情報に即した画像を生成する手法を提案する。
          </div>
          <div className='mx-auto text-center text-[min(3vw,30px)] mt-5'>
            《深層学習を用いた天体画像の解析》
          </div>
          <div className='mx-auto'>
            要素技術：
            GAN(Generative Adversarial Networks),
            Data Augmentation, 
            t-SNE,
            k-means法
          </div>
          <div className='mx-auto'>
            赤外線リングのデータセットをDataAugmentationで拡張し、それをGANで学習させて生成した画像をリングかどうか識別する手法を提案する。また、銀河衝突シミュレーションにより銀河を作成し、それを用いて観測者から見た空の様子を示す画像を生成する手法を提案する。
          </div>
          <div className='mx-auto text-center text-[min(3vw,30px)] mt-5'>
            《RLHFを用いたLLMの学習手法の検討》
          </div>
          <div className='mx-auto'>
            要素技術：
            RLHF(Reinforcement Learning from Human Feedback),
            ChatGPT, 
            LoRA(Low-Rank Adaptation),
            BERT(Bidirectional Encoder Representations from Transformers)
          </div>
          <div className='mx-auto'>
            LLMの価値観や目的を人間と合致させるため、アライメントの調整が必要とされるようになりRLHFが注目されている。そこで、ゲームシナリオデータを用いて、数文字に続くキャラクターの性格にあった文章を生成することでRLHFを用いたLLMの学習手法を検討した。
          </div>
          <div className='mx-auto text-center text-[min(4vw,40px)] rounded-lg bg-sky-500/100 text-white shadow-lg mt-5 mb-3'>趣味</div>
          <div className='mx-auto text-center text-[min(3vw,30px)]'>旅行、スポーツ観戦（サッカー）、映画鑑賞</div>

        <SlideInLeft>
        <div id="skill" className="text-center mt-10 text-[min(10vw,100px)]">Skill</div>     
        </SlideInLeft>
        <div className='mx-auto text-[min(3vw,30px)]'>最も得意な言語は普段の研究で用いている Python です。上の「研究」で説明した要素技術を使用するため、深層学習用のライブラリである PyTorch で記述しています。</div>
        <div className='mx-auto text-[min(3vw,30px)]'>次に得意なのはこのポートフォリオの作成にも使っている React/Next.js です。部活動のホームページを作る際に共同開発も経験しました。</div>       
        <div className='flex justify-center items-center gap-4'>
        <div className={styles.for_pc}>
            <RadarChart // レーダーチャートのサイズや位置、データを指定
                height={400} //レーダーチャートの全体の高さを指定
                width={500} //レーダーチャートの全体の幅を指定
                cx="50%" //要素の左を基準に全体の50%移動
                cy="50%" //要素の上を基準に全体の50%移動
                data={dataRadar1} //ここにArray型のデータを指定
              >
              <PolarGrid /> // レーダーのグリッド線を表示
              <PolarAngleAxis
                dataKey="rank" //Array型のデータの、数値を表示したい値のキーを指定
              />
              <PolarRadiusAxis 
                domain={[0, 100]}
              />
              <Radar //レーダーの色や各パラメーターのタイトルを指定
                dataKey="score" //Array型のデータのパラメータータイトルを指定
                stroke="#8884d8"  //レーダーの線の色を指定
                fill="#8884d8" //レーダーの中身の色を指定
                fillOpacity={0.6} //レーダーの中身の色の薄さを指定
                isAnimationActive={true}
                animationBegin={500}
                animationDuration={3000}
              />
              <Tooltip /> //hoverすると各パラメーターの値が表示される
            </RadarChart> 
        </div>
        <div className={styles.for_pc}>
            <RadarChart // レーダーチャートのサイズや位置、データを指定
                height={400} //レーダーチャートの全体の高さを指定
                width={500} //レーダーチャートの全体の幅を指定
                cx="50%" //要素の左を基準に全体の50%移動
                cy="50%" //要素の上を基準に全体の50%移動
                data={dataRadar2} //ここにArray型のデータを指定
              >
              <PolarGrid /> // レーダーのグリッド線を表示
              <PolarAngleAxis
                dataKey="rank" //Array型のデータの、数値を表示したい値のキーを指定
              />
              <PolarRadiusAxis 
                domain={[0, 100]}
              />
              <Radar //レーダーの色や各パラメーターのタイトルを指定
                dataKey="score" //Array型のデータのパラメータータイトルを指定
                stroke="#8884d8"  //レーダーの線の色を指定
                fill="#8884d8" //レーダーの中身の色を指定
                fillOpacity={0.6} //レーダーの中身の色の薄さを指定
              />
              <Tooltip /> //hoverすると各パラメーターの値が表示される
            </RadarChart>    
        </div>
        </div>

        <div style={{height: '300px'}} className={styles.for_sp}>
          <ResponsiveContainer>
            <RadarChart // レーダーチャートのサイズや位置、データを指定
                height={400} //レーダーチャートの全体の高さを指定
                width={400} //レーダーチャートの全体の幅を指定
                cx="50%" //要素の左を基準に全体の50%移動
                cy="50%" //要素の上を基準に全体の50%移動
                data={dataRadar1} //ここにArray型のデータを指定
              >
              <PolarGrid /> // レーダーのグリッド線を表示
              <PolarAngleAxis
                dataKey="rank" //Array型のデータの、数値を表示したい値のキーを指定
              />
              <PolarRadiusAxis 
                domain={[0, 100]}
              />
              <Radar //レーダーの色や各パラメーターのタイトルを指定
                dataKey="score" //Array型のデータのパラメータータイトルを指定
                stroke="#8884d8"  //レーダーの線の色を指定
                fill="#8884d8" //レーダーの中身の色を指定
                fillOpacity={0.6} //レーダーの中身の色の薄さを指定
                isAnimationActive={true}
                animationBegin={500}
                animationDuration={3000}
              />
              <Tooltip /> //hoverすると各パラメーターの値が表示される
            </RadarChart> 
          </ResponsiveContainer>
        </div>
        <div style={{height: '300px'}} className={styles.for_sp}>
          <ResponsiveContainer>
            <RadarChart // レーダーチャートのサイズや位置、データを指定
                height={400} //レーダーチャートの全体の高さを指定
                width={400} //レーダーチャートの全体の幅を指定
                cx="50%" //要素の左を基準に全体の50%移動
                cy="50%" //要素の上を基準に全体の50%移動
                data={dataRadar2} //ここにArray型のデータを指定
              >
              <PolarGrid /> // レーダーのグリッド線を表示
              <PolarAngleAxis
                dataKey="rank" //Array型のデータの、数値を表示したい値のキーを指定
              />
              <PolarRadiusAxis 
                domain={[0, 100]}
              />
              <Radar //レーダーの色や各パラメーターのタイトルを指定
                dataKey="score" //Array型のデータのパラメータータイトルを指定
                stroke="#8884d8"  //レーダーの線の色を指定
                fill="#8884d8" //レーダーの中身の色を指定
                fillOpacity={0.6} //レーダーの中身の色の薄さを指定
              />
              <Tooltip /> //hoverすると各パラメーターの値が表示される
            </RadarChart>    
          </ResponsiveContainer>
        </div>

        <SlideInLeft>
          <div id="project" className="text-center mt-10 text-[min(10vw,100px)]">Project</div>      
        </SlideInLeft>
        <div className='mx-auto text-[min(3vw,30px)]'>下線を押すと私の GitHub アカウントへ飛びます。デモ動画や Web ページを公開しているのでご覧ください。</div>
        <div className='container mt-5'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
            <div className="shadow card h-100">
                <img src="enigma-website.png" className="card-img-top"/>
                <div className="card-body">
                <a href="https://github.com/Mura-Tomo/enigma-website"><h4>enigma-website</h4></a>
                <div className="card-text">大阪公立大学謎解きイベント制作団体「F-enigma」のWebページです。開発は3人で行っており、私はリーダーとして大部分の開発を担当しました。</div>
                <div className="px-6 pt-3">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Next.js</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">TypeScript</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwindcss</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">bootstrap</span>
              </div>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="shadow card h-100">
                <img src="portfolio1.png" className="card-img-top"/>
                <div className="card-body">
                <a href="https://github.com/Mura-Tomo/portfolio"><h4>portfolio</h4></a>
                <div className="card-text">この自己紹介用のWebページです。シンプルなデザインを心掛けました。</div>
                <div className="px-6 pt-3">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Next.js</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">TypeScript</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwindcss</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">bootstrap</span>
                </div>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="shadow card h-100">
                <img src="Honoka.png" className="card-img-top"/>
                <div className="card-body">
                <a href="https://github.com/Mura-Tomo/Honoka"><h4>Honoka</h4></a>
                <div className="card-text">オリジナルキャラクター「ほのか」と会話できるアプリです。アプリの制作は私が全て担当しました。感情による表情の変化、文章の音声読み上げ、リップシンク機能などを有しています。</div>
                <div className="px-6 pt-3">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Unity</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C#</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ChatGPT</span>
                </div>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="shadow card h-100">
                <img src="jsai2024.jpg" className="card-img-top"/>
                <div className="card-body">
                <a href="https://github.com/Mura-Tomo/JSAI2024"><h4>JSAI2024</h4></a>
                <div className="card-text">論文はまだ公開されていませんが、2024年度人工知能全国大会に参加予定です。タイトル「RLHFを用いたゲームデータに関するLLMの学習手法の検討」</div>
                <div className="px-6 pt-3">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Python</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PyTorch</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">RLHF</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">LoRA</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">BERT</span>
                </div>
                </div>
            </div>
            </div>
            <div className="col">
            <div className="shadow card h-100">
                <img src="atcoder.jpg" className="card-img-top"/>
                <div className="card-body">
                <a href="https://github.com/Mura-Tomo/ProgrammingContest"><h4>Programming Contest</h4></a>
                <div className="card-text">Actoderに参加した記録を残しています。</div>
                <div className="px-6 pt-3">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C++</span>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        <SlideInLeft>
          <div id="contact" className="text-center mt-10 text-[min(10vw,100px)]">Contact</div>      
        </SlideInLeft>
        <div className='mx-auto text-[min(3vw,30px)] mb-3'>お気軽にお問い合わせください。</div>
        <form action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT} method="post">
          <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                <div className="p-0 mb-2 bg-white text-dark">
                お名前
                </div>
              </label>
              <input id="name" name="name" type="name" className="form-control"/>
          </div>
          <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                <div className="p-0 mb-2 bg-white text-dark">
                メールアドレス
                </div>
              </label>
              <input id="email" name="email" type="email" className="form-control"/>
          </div>
          <div className='mb-3'>
              <label htmlFor='message' className='form-label'>
                <div className="p-0 mb-2 bg-white text-dark">
                メッセージ
                </div>
                </label>
              <textarea id="message" name="message" className="form-control"></textarea>
          </div>
          <button type="submit"  className="btn btn-danger">メール送信</button>
        </form>
      </div>
    </main>
    </>
  );
}
