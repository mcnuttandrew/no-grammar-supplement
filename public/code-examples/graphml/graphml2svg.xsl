<!--
-@author:	Christian Pich
-@contact:	Christian dot Pich at uni-konstanz dot de
-@name:		gnp.xsl
-@short:	Formats a spring.xsl graph
-@version:	1.0
-@modified:	
-@param: 	
-@desc: Transforms the output of spring.xsl into an SVG drawing
-of the graph.  Vertices are drawn as yellowish filled circles, and edges
-as black straight lines.
-->



<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:Math="java:java.lang.Math" exclude-result-prefixes="Math g"
    xmlns:g="http://graphml.graphdrawing.org/xmlns/graphml"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://graphml.graphdrawing.org/xmlns/graphml"
    xpath-default-namespace="http://graphml.graphdrawing.org/xmlns/graphml">
  <xsl:output method="xml" indent="yes" encoding="iso-8859-1"/>
  <xsl:namespace-alias stylesheet-prefix="g" result-prefix="#default"/>



<xsl:key name="node" match="node" use="@id"/>

<xsl:template match="desc|key|data"/>

<xsl:template match="/graphml/graph">
  <svg:svg width="{data[@key='width']}" height="{data[@key='height']}">
    <xsl:apply-templates select="edge"/>
    <xsl:apply-templates select="node"/>
  </svg:svg>
</xsl:template>

<xsl:template match="node">
  <svg:circle r="3" style="stroke:black; fill:yellow;"
    cx="{data[@key='x']}" cy="{data[@key='y']}"/>
</xsl:template>

<xsl:template match="edge">
  <svg:line style="stroke:black; stroke-width:1px; fill:none;"
    x1="{key('node',@source)/data[@key='x']}" y1="{key('node',@source)/data[@key='y']}"
    x2="{key('node',@target)/data[@key='x']}" y2="{key('node',@target)/data[@key='y']}"/>
</xsl:template>

</xsl:stylesheet>