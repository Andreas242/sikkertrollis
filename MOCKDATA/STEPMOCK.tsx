const STEPMOCK = [{
    HEADING: 'Har virksomheten laget en oversikt over sine servere?',
    RESPONSES: [{ id: 1, label: 'Vi har ingen slik oversikt', lvl: 1, feedback: 'Ikke bra' },
    { id: 2, label: 'Vi har en oversikt, men den er ikke komplett', lvl: 1, feedback: '' },
    { id: 3, label: 'Vi har en oversikt, men den er ikke oppdatert', lvl: 2, feedback: '' },
    { id: 4, label: 'Vi har en komplett og oppdatert oversikt over alle serverne våre', lvl: 2, feedback: '' }]
},
{
    HEADING: 'Beskytter virksomheten nettverket sitt med en brannmur?',
    RESPONSES: [{ id: 1, label: 'Vårt nettverk står ikke bak en brannmur', lvl: 1, feedback: 'Ikke bra' },
    { id: 2, label: 'Vi har en brannmur, men vi har aldri konfigurert den', lvl: 2, feedback: '' },
    { id: 3, label: 'Vi har en brannmur, men noen klienter eller servere er konfigurert til å ikke bruke den', lvl: 2, feedback: '' },
    { id: 4, label: 'Vi har aktivert brannmurfunksjonalitet i alle nettverkskomponenter, servere og klienter hvor det er mulig', lvl: 2, feedback: '' }]
 
},
{
    HEADING: 'Hvor ofte installerer virksomheten sikkerhetsoppdateringer på kritiske servere?',
    RESPONSES: [
    { id: 1, label: 'Vi oppdaterer aldri våre servere', lvl: 1, feedback: 'Ikke bra' },
    { id: 2, label: 'Vi installerer sikkerhetsoppdateringer når vi leser om kritiske oppdateringer i nyhetene', lvl: 2, feedback: 'Gjør bedre' },
    { id: 3, label: 'Vi installerer sikkerhetsoppdateringer på faste tidspunkt, men ikke nødvendigvis rett etter at de er tilgjengelige', lvl: 2, feedback: 'Gjør bedre' },
    { id: 4, label: 'Vi installerer sikkerhetsoppdateringer når vi får varsel fra leverandør', lvl: 2, feedback: 'Ganska bra' },
    { id: 5, label: 'Vi installerer sikkerhetsrutiner i henhold til etablert rutine eller automatisk prosess', lvl: 3, feedback: 'Vädligt bra' },
]

},
{
    HEADING: 'Har virksomheten etablert et planverk for hendelseshåndtering?',
    RESPONSES: [{ id: 1, label: 'Vi har ingen planer for hvordan vi skal håndtere et dataangrep', lvl: 1, feedback: 'Ikke bra' },
    { id: 2, label: 'Vi har noen planer, men de dekker ikke alle våre systemer', lvl: 2, feedback: '' },
    { id: 3, label: 'Vi har planer, men vi øver ikke rutinemessig på dem', lvl: 2, feedback: '' },
    { id: 4, label: 'Vi har planer som vi rutinemessig øver på', lvl: 2, feedback: '' }]

},



];


export default STEPMOCK;