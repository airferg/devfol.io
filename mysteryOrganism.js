// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  //Creates Specimen Object
  const pAequorFactory = (specimenNum, arrayOf15) =>{ 
    return {
      specimenNum: specimenNum,
      dna: arrayOf15,
      //Mutates specimen DNA into different bases (Example: if base = A, will change to either T, C, or G)
      mutate(){
        console.log(mockUpStrand());
        const currentBase = Math.floor(Math.random() * this.dna.length);
        base = this.dna[currentBase];
        let newBase = returnRandBase();
        while (newBase === base){
          newBase = returnRandBase();
        }
        this.dna[currentBase] = newBase;
        return this.dna;
        },
      //Creates new pAequor Object and compares first object's dna to new object
      compareDNA(pAequorObject){
        let identicalBases = 0;
        let basePosition = [];
        let commonPercentage;
        for(let i = 0; i < this.dna.length; i++){
          if(this.dna[i] === pAequorObject.dna[i]){
            identicalBases++;
  
            basePosition.push(i);
  
            commonPercentage = ((identicalBases / this.dna.length) * 100).toFixed(0);
          }
        }
  
        return `specimen #${this.specimenNum} and specimen #${pAequorObject.specimenNum} have ${commonPercentage}% DNA in common.`;
      },
      //Calculates if C and G bases make up at least 60% of dna strand. If so, specimen will survive.
      willLikelySurvive(){
        let cTally = 0;
        let gTally = 0;
        for(let i = 0; i < this.dna.length; i++){
          if(this.dna[i] === 'C'){
            cTally++;
          }else if(this.dna[i] === 'G'){
            gTally++;
          }
        }
        if (((cTally + gTally)/this.dna.length) >= 0.6){
          return true;
        }else{
          return false;
        }
      },
  
      //returns the complementary DNA strand to the specimens dna
      complementStrand(){
        const complementaryStrand = []
        console.log(this.dna);
        for(let i = 0; i < this.dna.length; i++){
          if(this.dna[i] === 'A'){
            complementaryStrand.push('T');
          }else if(this.dna[i] === 'T'){
            complementaryStrand.push('A');
          }else if(this.dna[i] === 'C'){
            complementaryStrand.push('G');
          }else if(this.dna[i] === 'G'){
            complementaryStrand.push('C');
          }
        }
        return complementaryStrand;
      }
    };
  };
  
  //creates array of 30 different specimens that will survive, and their complementary strands
  const survivingSpecimens = [];
  let specimenNum = 1;
  
  while (survivingSpecimens.length < 30){
    const newSpecimen = pAequorFactory(specimenNum, mockUpStrand());
    if (newSpecimen.willLikelySurvive()){
      survivingSpecimens.push(newSpecimen);
    }
    specimenNum++;
  }
  
  console.log(pAequorFactory(1, mockUpStrand()).complementStrand());

  //plug in to portfolio

  let compare = pAequorFactory(1, mockUpStrand()).compareDNA(pAequorFactory(2, mockUpStrand()));
  let complement = pAequorFactory(1, mockUpStrand()).complementStrand();
  let mutate1 = pAequorFactory(1, mockUpStrand).mutate();
  let survive = pAequorFactory(1, mockUpStrand).willLikelySurvive();


  document.getElementById('goButton').addEventListener('click', function (){
    const compareResult = pAequorFactory(1, mockUpStrand()).compareDNA(pAequorFactory(2, mockUpStrand()));
    document.getElementById('compare-output').innerText = compareResult;
  });
  
  document.getElementById('complementButton').addEventListener('click', function (){
    const complementResult = complement;
    document.getElementById('complement-output').innerText = complementResult;
  });

  document.getElementById('mutateButton').addEventListener('click', function (){
    const mutateResult = mutate1;
    document.getElementById('mutate-output').innerText = mutateResult;
  });

  document.getElementById('surviveButton').addEventListener('click', function (){
    const surviveResult = survive;

    document.getElementById('survive-output').innerText = surviveResult;
  });

  document.getElementById('specimensButton').addEventListener('click', function (){
    const specimenResult = survivingSpecimens;
    document.getElementById('specimens-output').innerText = specimenResult;
  });

  console.log(mutate1)