const STEPMOCK = [{
    HEADING: 'Hva har dere gjort for å dempe virkningen av at kvantecomputere når RSA-bruddnivåer av beregningskraft?',
    RESPONSES: [{ id: 1, label: 'Hva er en kvantecomputer?', lvl: 1, feedback: 'Ikke bra' },
    { id: 2, label: 'Vi er klar over risikene, men har ingen aktuell agenda for å håndtere det.', lvl: 1, feedback: '' },
    { id: 3, label: 'Vi har en plan om å se på det i løpet av de neste to årene.', lvl: 2, feedback: '' },
    { id: 4, label: 'Vi er for øyeblikket i samtaler om å endre våre krypteringsalgoritmer i henhold til NIST-veiledninger.', lvl: 2, feedback: '' },
    { id: 5, label: 'Vi har implementert nye krypteringsalgoritmer i henhold til NIST-veiledninger.', lvl: 3, feedback: '' }]

},
{
    HEADING: 'Hva har selskapet gjort for å beskytte mot phishing-angrep?',
    RESPONSES: [{ id: 1, label: 'Vi er ikke klar over phishing-angrep.', lvl: 1, feedback: 'Ikke bra' },
    { id: 2, label: 'Vi sender regelmessige e-poster til ansatte om å være oppmerksomme på phishing-angrep.', lvl: 2, feedback: '' },
    { id: 3, label: 'Vi har implementert teknologi for å oppdage phishing-angrep i sanntid.', lvl: 2, feedback: '' },
    { id: 4, label: 'Ansatte gjennomgår regelmessig opplæring om phishing-angrep.', lvl: 2, feedback: '' },
    { id: 5, label: 'Vi har en kombinasjon av flere av ovennevnte tiltak.', lvl: 3, feedback: '' }]

},
{
    HEADING: 'Hva har selskapet gjort for å beskytte sensitive data?',
    RESPONSES: [
    { id: 1, label: 'Vi har ikke implementert noen sikkerhetstiltak for å beskytte sensitive data.', lvl: 1, feedback: 'Ikke bra' },
    { id: 2, label: 'Vi krypter data ved hjelp av standard krypteringsalgoritmer.', lvl: 2, feedback: 'Gjør bedre' },
    { id: 3, label: 'Vi har implementert tilleggsbeskyttelse ved å kreve tofaktorautentisering for å få tilgang til sensitive data.', lvl: 2, feedback: 'Gjør bedre' },
    { id: 4, label: 'Sensitive data lagres på en sikker skytjeneste.', lvl: 2, feedback: 'Ganska bra' },
    { id: 5, label: 'Vi har en kombinasjon av flere av ovennevnte tiltak.', lvl: 3, feedback: 'Vädligt bra' },
]

},
{
    HEADING: 'Hva har selskapet gjort for å beskytte mot trusler fra internett of ting?',
    RESPONSES: [{ id: 1, label: 'Vi er ikke klar over trusler fra IoT.', lvl: 1, feedback: 'Ikke bra' },
    { id: 2, label: 'Vi overvåker regelmessig for sårbare enheter på nettverket.', lvl: 2, feedback: '' },
    { id: 3, label: 'Vi har implementert teknologi for å oppdage trusler fra IoT i sanntid.', lvl: 2, feedback: '' },
    { id: 4, label: 'Vi oppdaterer regelmessig sårbare enheter for å sikre deres sikkerhet.', lvl: 2, feedback: '' },
    { id: 5, label: 'Vi har en kombinasjon av flere av ovennevnte tiltak.', lvl: 3, feedback: '' }]

},



];


export default STEPMOCK;