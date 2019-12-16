<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

class CalculationController extends AbstractController
{
    /**
     * @Route("/", name="calculation")
     */
    public function index(Request $request)
    {
        if ($request->isXmlHttpRequest() || $request->query->get('showJson') == 1) {
            $operation = $request->get('operation');
            $fValue = $request->get('fValue');
            $sValue = $request->get('sValue');
            if ($operation == "Divide" && $sValue == 0) {
                $jsonData = array('finaleResult' => "undefined");
                return new JsonResponse($jsonData);
            } elseif ($operation == "Add") {
                $res = $fValue + $sValue;
            } elseif ($operation == "Substract") {
                $res = $fValue - $sValue;
            } elseif ($operation == "Multiply") {
                $res = $fValue * $sValue;
            } elseif ($operation == "Divide") {
                $res = $fValue / $sValue;
            }

            $jsonData = array('finaleResult' => $res);

            return new JsonResponse($jsonData);
        } else {
            return $this->render('calculation/index.html.twig');
        }
    }
}
