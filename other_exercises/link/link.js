window.addEventListener('load', function() {
    const link = document.querySelector('.link');
    const panel = document.querySelector('.panel');
    const addBtn = document.getElementById('add');
    const removeBtn = document.getElementById('remove');
    const reverseBtn = document.getElementById('reverse');
    const model = document.querySelector('.model');
    const nodeVal = document.getElementById('nodeVal');
    const confirm = document.getElementById('confirm');
    const cancel = document.getElementById('cancel');

    panel.addEventListener('click', function(e) {
        switch(e.target.id) {
            case 'add':
                // 先将model框中的input清空
                nodeVal.value = '';
                // 显示model框
                model.classList.remove('hidden');
                break;
            case 'remove':
                // 删除链表某个节点
                break;
            case 'reverse':
                // 反转链表
        }
    });

    model.addEventListener('click', function(e) {
        switch(e.target.id) {
            case 'confirm':
                // 隐藏model
                model.classList.add('hidden');
                // 获取值，创建新节点并加入link中
                link.appendChild(createLinkNode(nodeVal.value));
                nums.push(nodeVal.value);
                break;
            case 'cancel':
                model.classList.add('hidden');
        }
    });
});

const nums = [];

function createLinkNode(nodeVal) {
    const docFrag = document.createDocumentFragment();

    // 如果链表已有节点，新加入的节点前要加箭头
    if (nums.length > 0) {
        const arrow = document.createElement('span');   
        arrow.classList.add('arrow');
        arrow.innerHTML = '-->';
        docFrag.appendChild(arrow);
    }

    const node = document.createElement('span');
    node.classList.add('node');
    node.innerHTML = nodeVal;
    docFrag.appendChild(node);
    
    return docFrag;
}