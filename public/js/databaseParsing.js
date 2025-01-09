//google spreadsheet database access

const aboutTightLippedURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGaiZE9A7QFSsKwEHUB2fEONVTgZ95YfvPy4E12ARxhs-8xMeyFXGpGpdtl2YCS5s2LB60cdH1okyy/pub?gid=789708979&single=true&output=csv';
const resourcesURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGaiZE9A7QFSsKwEHUB2fEONVTgZ95YfvPy4E12ARxhs-8xMeyFXGpGpdtl2YCS5s2LB60cdH1okyy/pub?gid=1123874413&single=true&output=csv'
const findAProviderURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGaiZE9A7QFSsKwEHUB2fEONVTgZ95YfvPy4E12ARxhs-8xMeyFXGpGpdtl2YCS5s2LB60cdH1okyy/pub?gid=1965237365&single=true&output=csv'
const conditionsURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGaiZE9A7QFSsKwEHUB2fEONVTgZ95YfvPy4E12ARxhs-8xMeyFXGpGpdtl2YCS5s2LB60cdH1okyy/pub?gid=1708265449&single=true&output=csv'
const connectionXConditionURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGaiZE9A7QFSsKwEHUB2fEONVTgZ95YfvPy4E12ARxhs-8xMeyFXGpGpdtl2YCS5s2LB60cdH1okyy/pub?gid=1138861912&single=true&output=csv'
const mentalHealthResourcesURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGaiZE9A7QFSsKwEHUB2fEONVTgZ95YfvPy4E12ARxhs-8xMeyFXGpGpdtl2YCS5s2LB60cdH1okyy/pub?gid=1893890275&single=true&output=csv'
const supplementalHealthcareResourcesURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGaiZE9A7QFSsKwEHUB2fEONVTgZ95YfvPy4E12ARxhs-8xMeyFXGpGpdtl2YCS5s2LB60cdH1okyy/pub?gid=806596720&single=true&output=csv'

const parseFile = (url) => new Promise((resolve) => {
    Papa.parse(url, {
        download:true,
        complete: (results) => {
            resolve(results.data);
        }
    });
});

async function fetchParsedData() {
    const parsedData = await Promise.all([
		parseFile(aboutTightLippedURL), 
		parseFile(resourcesURL),
		parseFile(findAProviderURL),
		parseFile(conditionsURL),
		parseFile(connectionXConditionURL),
		parseFile(mentalHealthResourcesURL),
		parseFile(supplementalHealthcareResourcesURL)
	])	 
		return parsedData
}
const database = fetchParsedData()
console.log(database )