"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
(function () {
    var _a;
    var $ = function (query) {
        return document.querySelector(query);
    };
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function salvar(veiculos) {
            localStorage.setItem('patio', JSON.stringify(veiculos));
        }
        function adicionar(veiculo, salva) {
            var _a;
            var row = document.createElement('tr');
            row.innerHTML = "\n                <td>" + veiculo.nome + "</td>\n                <td>" + veiculo.placa + "</td>\n                <td>" + veiculo.entrada + "</td>\n                <td>\n                    <button class=\"delete\" data-placa=\"" + veiculo.placa + "\">X</button>\n                </td>               \n            ";
            (_a = $('#patio')) === null || _a === void 0 ? void 0 : _a.appendChild(row);
            if (salva)
                salvar(__spreadArrays(ler(), [veiculo]));
        }
        function remover() { }
        function render() {
            $('#patio').innerHTML = '';
            var patio = ler();
            if (patio.length) {
                patio.forEach(function (veiculo) { return adicionar(veiculo); });
            }
        }
        return { ler: ler, adicionar: adicionar, remover: remover, salvar: salvar, render: render };
    }
    patio().render();
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var _a, _b;
        var nome = (_a = $('#nome')) === null || _a === void 0 ? void 0 : _a.value;
        var placa = (_b = $('#placa')) === null || _b === void 0 ? void 0 : _b.value;
        if (!nome || !placa) {
            alert("Os campos nome e placa são obrigatórios");
            return;
        }
        patio().adicionar({ nome: nome, placa: placa, entrada: new Date() }, true);
    });
})();
