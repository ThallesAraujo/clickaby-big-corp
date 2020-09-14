from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json
from datetime import date, datetime

app = Flask(__name__)
CORS(app)

with open('clientes.json') as database:
    clientes = json.load(database)

@app.route("/ecommerce/v1/clientes", methods =['POST', 'PUT', 'GET'])
def cliente():
    
    if request.method == 'POST':
        cliente = request.get_json()
        cliente["id"] = len(clientes) + 1
        data = datetime.now().strftime("%d/%m/%Y")
        
        cliente['dataCadastro'] = data
        clientes.append(cliente)
        saveClientes(clientes)

    if request.method == 'GET':
        with open('clientes.json') as database:
            clientes_retorno = json.load(database)
            return jsonify(clientes_retorno)

    if request.method == 'PUT':
        cliente = list(filter(lambda p: int(p['id']) == int(request.get_json()['id']), clientes))[0]
        indexCliente = clientes.index(cliente)
        clientes[indexCliente] = request.get_json()
        saveClientes(clientes)

@app.route("/ecommerce/v1/clientes/<id>", methods =['GET', 'DELETE'])
def getCliente(id):
    
    if(id is None):
        return jsonify(clientes)

    if request.method == 'GET':
        with open ('clientes.json') as database:
            clientes = json.load(database)
            return jsonify(list(filter(lambda p: int(p['id']) == int(id), clientes))[0])

    if request.method == 'DELETE':
        with open ('clientes.json') as database:
            clientes = json.load(database)
            clientes[int(id)]["status"] = "inativo"
            saveClientes(clientes)

@app.route("/ecommerce/v1/clientes/<id>/pedidos", methods =['GET', 'POST'])
def getPedidosCliente(id):
    with open('pedidos.json') as database:
        data = json.load(database)
        pedidos = data
        if request.method == 'GET':
            listaPedidos = []
            listaPedidos = list(filter(lambda p: int(p['idCliente']) == int(id), pedidos))
            return jsonify(listaPedidos)
        if request.method == 'POST':
            pedido = request.get_json()
            pedido['id'] = len(pedidos) + 1
            pedidos.append(pedido)
            savePedidos(pedidos)

@app.route("/ecommerce/v1/pedidos", methods =['GET'])
def getPedidos():
    with open('pedidos.json') as database:
        data = json.load(database)
        pedidos = data
        if request.method == 'GET':
            return jsonify(pedidos)


@app.route("/ecommerce/v1/pedidos/<id>", methods =['GET'])
def getPedido(id):
    with open('pedidos.json') as database:
        data = json.load(database)
        pedidos = data
        if request.method == 'GET':
            pedido = list(filter(lambda p: int(p['id']) == int(id), pedidos))[0]
            return jsonify(pedido)


@app.route("/ecommerce/v1/produtos", methods =['GET'])
def getProdutos():
    with open('produtos.json') as database:
        data = json.load(database)
        produtos = data
        if request.method == 'GET':
            return jsonify(produtos)


def saveClientes(clientes):
    with open('clientes.json', 'w') as database:
        json.dump(clientes, database)
        
def savePedidos(pedidos):
    with open('pedidos.json', 'w') as database:
        json.dump(pedidos, database)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
    #app.run()
