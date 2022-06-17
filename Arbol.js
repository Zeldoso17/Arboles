class Checklist {
    constructor(groups = []) {
        this.groups = groups;
    }

    addGroup(group) {
        this.groups.push(group);
    }
}

class SubGroup {
    constructor(title, subGroups = [], checks = []) {
        this.title = title;
        this.subGroups = subGroups;
        this.checks = checks;
    }

    addSubGroup(subGroup) {
        this.subGroups.push(subGroup);
    }
}

class Group {
    constructor (title, subGroups = [], checks = []) {
        this.title = title;
        this.subGroups = subGroups;
        this.checks = checks;
    }

    addGroup(group) {
        this.subGroups.push(group);
    }
}

class Check {
    constructor(name, value = 0) {
        this.name = name;
        this.value = value;
    }

    addCheck(check) {
        this.checks.push(check);
    }
}
let array = [];

let groups = [];

let checkListVideoGames = new Checklist(new Group('VideoGames', [new SubGroup('Action', [],[new Check('The last of us'), new Check('Uncharted 4')])]));
let checkListSeries = new Checklist(new Group('Series', [new SubGroup('horror', [], [new Check('Marianne'), new Check('The Walking Dead')])]));
let checkListMovies = new Checklist(new Group('Movies', [new SubGroup('Comedy', [], [new Check('Free Guy'), new Check('Ted')])]));
let checkListComputerBrand = new Checklist(new Group('Computer brands', [new SubGroup('laptop', [], [new Check('DELL'), new Check('HP')])]));
let arrays = [...array, checkListVideoGames, checkListSeries, checkListMovies, checkListComputerBrand];

arrays.map(element => {
    console.log("Group name: ", element.groups.title);
    console.log(element.groups);
    element.groups.subGroups.map(subGroup => {
        console.log(subGroup);
    });
    console.log("-----------------------------------------------------");
});

array.filter(function(){
    return true;
});