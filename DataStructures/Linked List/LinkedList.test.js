const linked = require('./LinkedList');
const node = require('./Node');
let LinkedList = linked.LinkedList;
let Node = node.Node;

test('we can create a new linked list', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
    expect(ll).toHaveProperty('head');
});

test('we can create a new node', () => {
    const ll = new LinkedList();
    const data = {'repoName': 'JavaScriptAlgorithms', 'owner': 'vJechsmayr'};
    const node = new Node(data);

    expect(ll).toBeDefined();
    expect(node.data).toEqual(data);
});

test('we can append to the linked list', () => {
    const ll = new LinkedList();
    const data = {'repoName': 'JavaScriptAlgorithms', 'owner': 'vJechsmayr'};
    const node = new Node(data);
    ll.append(data);
    expect(ll.head).toEqual(node);
});

test('we can prepend to the linked list', () => {
    const ll = new LinkedList();
    const firstData = {'repoName': 'JavaScriptAlgorithms', 'owner': 'vJechsmayr'};
    const secondData = {'repoName': 'jest', 'owner': 'facebook'};
    const firstNode = new Node(firstData);
    const secondNode = new Node(secondData);

    ll.append(firstData);
    ll.prepend(secondData);
    secondNode.next = firstNode;

    expect(ll.head).toEqual(secondNode)
});

test('we can delete from the linked list', () => {
    const ll = new LinkedList();

    const firstData = {'repoName': 'JavaScriptAlgorithms', 'owner': 'vJechsmayr'};
    const firstNode = new Node(firstData);

    ll.append(firstData);
    expect(ll.head).toEqual(firstNode);

    ll.deleteWithValue('repoName', 'JavaScriptAlgorithms');

    expect(ll.head).toEqual(null);
});

test('we receive false when trying to delete a non-existent node', () => {
    const ll = new LinkedList();
    expect (ll.deleteWithValue('repoName', 'nothing')).toBe(false);
});

test('we receive true when successfully deleting a node', () => {
    const ll = new LinkedList();
    const firstData = {'repoName': 'JavaScriptAlgorithms', 'owner': 'vJechsmayr'};

    ll.append(firstData);

    expect (ll.deleteWithValue('repoName', 'JavaScriptAlgorithms')).toBe(true);
});

test('we can retrieve a node from the linked list', () => {
    const ll = new LinkedList();

    const firstData = {'repoName': 'JavaScriptAlgorithms', 'owner': 'vJechsmayr'};
    const secondData = {'repoName': 'jest', 'owner': 'facebook'};
    const secondNode = new Node(secondData);

    ll.append(firstData);
    ll.append(secondData);

    const fb = ll.getNodeWithValue('owner', 'facebook');

    expect(fb).toEqual(secondNode);
});

test('we receive null when retreiving a non-existent node', () => {
    const ll = new LinkedList();

    const firstData = {'repoName': 'JavaScriptAlgorithms', 'owner': 'vJechsmayr'};
    const firstNode = new Node(firstData);

    ll.append(firstData);

    const search = ll.getNodeWithValue('repoName', 'nothing');

    expect(search).toBe(null);
});