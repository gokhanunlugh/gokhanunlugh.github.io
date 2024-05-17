
let secim = prompt('Güneşin son ışıkları, eski ve gizemli bir ormanın ağaçlarının arasından sızıyordu. Ormanın derinliklerinde, kayıp bir hazinenin efsanesi dilden dile dolaşıyordu. Bu hazine, eski ve unutulmuş bir tapınağın içinde saklanmıştı. Ancak, tapınağa ulaşmak için iki farklı yol vardı. Ya ormanın karanlık gizemlerle dolu labirentlerinden geçeceklerdi, ya da büyülü bir nehrin sularında yolculuk yapacaklardı. Hangi yolu seçeceklerdi? Labirent / Nehir')


if (secim == 'Labirent') {
  let secim2 = prompt('Kaşifler, ormanın karanlık labirentlerine doğru yola çıktılar. Görünmez düğümlerle dolu bu gizemli labirentler, cesur ruhların bile zihnini zorluyordu. Ancak, kararlılıkla ilerlediler ve sonunda tapınağın girişine ulaştılar. Kapının eşiğinde, antik yazılarla dolu bir yazıt vardı. Yazıt, onlara iki seçenek sundu: ya tapınağın içine girecekler ve lanetli hazinenin sırlarını çözecekler ya da geri dönüp güvenli limana varacaklardı. Tapınak / Liman')
    if (secim2 == 'Tapınak') {
      let secim3 = prompt('Kararlarını verip tapınağa adım atan kaşifler, antik yapıların arasında ilerlediler. Duvarlardaki gizemli semboller onlara yollarını aydınlatıyordu. Derinliklere indikçe, tapınakta saklı olan hazinenin varlığına dair bir his duydular. Ancak, ilerledikçe karşılarına birçok tuzak çıktı ve tapınak lanetlenmiş gibi görünüyordu. Ya tuzakları aşacaklar ve hazineye ulaşacaklar ya da tapınağın lanetiyle yüzleşip geri döneceklerdi. İlerle / Geri dön')
        if (secim3 == 'İlerle') {
          let secim4 = prompt('Kararlı bir şekilde ilerleyen kaşifler, tuzakları aşmayı başardılar ve tapınağın derinliklerine doğru ilerlediler. Sonunda, antik bir oda içinde parıldayan hazineyle karşılaştılar. Hazinenin etrafında birçok değerli eşya bulunuyordu, ancak bir kalkanın altında bir not da gördüler. Not, onlara iki seçenek sundu: ya hazineyi alıp laneti kabul edecekler ya da hazineyi terk edip güvenli bir şekilde tapınaktan ayrılacaklardı. Hazineyi al / Geri dön')
            if (secim4 == 'Hazineyi al') {
              let secim5 = prompt('Hazineyi alıp laneti kabul eden kaşifler, zenginlik ve güçle dolu olduklarını hissettiler. Ancak, hazineyi taşıdıkları anda etraflarında gizemli bir sis belirdi ve tapınaklarından çıkamadılar. Tapınağın laneti onları sarmıştı ve birçok talihsizlikle karşılaştılar. Ya lanetle mücadele edip tapınaktan kurtulacaklar ya da lanetin esiri olarak sonsuza kadar tapınağın içinde kalacaklardı. Mücadele et / Kaderini kabullen')
                if (secim5 == 'Mücadele et') {
                  let secim6 = prompt('Kararlı bir şekilde lanetle mücadele etmeye karar veren kaşifler, antik sembollerin gizemini çözmeye çalıştılar. Zorlu bir mücadele sonrasında, lanetin köklerini bulup yok etmeyi başardılar. Tapınaktan çıktıklarında, lanetin etkileri geride kalmıştı ve özgürdüler. Ancak, hazineyi almak için verdikleri mücadele onlara büyük bir bedel ödetmişti ve artık geri dönüşleri yoktu. Ya kazandıkları zenginlikle yeni bir hayat kuracaklar ya da tapınakta geçirdikleri zorlu günlerin acısını çekeceklerdi. Yeni bir hayat / PTSD? ')
                    if (secim6 == 'Yeni bir hayat') {
                      alert('Yeni bir hayat kurmaya karar veren kaşifler, hazineyle birlikte uzak diyarlara doğru yola çıktılar. Kazandıkları zenginlikle lüks bir yaşam sürmeyi hayal ediyorlardı. Ancak, yolda karşılarına çıkan zorluklarla mücadele etmek zorunda kaldılar. Sonunda, bir krallığa ulaştılar ve orada kendilerine yeni bir hayat kurdular. ')

                    } else {
                      alert('???')
                    }

                } else {
                  alert('Bu sefer kendileri kabullendi')
                }
            } else {
              alert('Dönüş yolunda meraklarıbna yenik düştüler ve bir heykeli kurcalarken tuzaklar tarafından şişlendiler.')
            }

        } else {
          alert('Geri dönerken kapılar üstlerine kapandı ve susuzluktan öldüler.')
        }
    } else {
      alert('Her yazıya inanmamak gerekiyormuş. Limanda pusuya düşürüldüler ve öldüler.')
    }
  

} else {
  alert('Yolculuk esnasında bota canavarlar saldırdı ve boğularak can verdiler')
}