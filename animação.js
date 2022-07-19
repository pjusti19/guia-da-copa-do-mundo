let tempo = 3000; 
            setTimeout(() => {
              document.querySelector('.desapareça').classList.add('sumir');
              document.querySelector('#corpo').classList.remove('sumir');
            }, tempo);